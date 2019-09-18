/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic-list.component.ts
 *
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentCollection, Service} from 'ngx-jsonapi';
import {ExtrinsicService} from '../../services/extrinsic.service';
import {Extrinsic} from '../../classes/extrinsic.class';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {RuntimeModule} from '../../classes/runtime-module.class';
import {RuntimeCall} from '../../classes/runtime-call.class';
import {RuntimeModuleService} from '../../services/runtime-module.service';
import {RuntimeCallService} from '../../services/runtime-call.service';

@Component({
  selector: 'app-inherent-list',
  templateUrl: './inherent-list.component.html',
  styleUrls: ['./inherent-list.component.scss']
})
export class InherentListComponent implements OnInit, OnDestroy {

  public extrinsics: DocumentCollection<Extrinsic>;

  public runtimeModules: DocumentCollection<RuntimeModule>;
  public runtimeCalls: DocumentCollection<RuntimeCall>;
  public filterModule: RuntimeModule = null;
  public filterCall: RuntimeCall = null;

  currentPage = 1;

  private fragmentSubsription: Subscription;

  constructor(
    private extrinsicService: ExtrinsicService,
    private runtimeModuleService: RuntimeModuleService,
    private runtimeCallService: RuntimeCallService,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit() {

    const params = {
      remotefilter: {latestRuntime: true},
    };

    this.runtimeModuleService.all(params).subscribe(runtimeModules => {
      this.runtimeModules = runtimeModules;
    });

    this.fragmentSubsription = this.activatedRoute.fragment.subscribe(value => {
      if (+value > 0) {
        this.currentPage = +value;
      } else {
        this.currentPage = 1;
      }
      this.getExtrinsics(this.currentPage);
    });
  }

  selectModule(module) {

    this.filterModule = module;
    this.filterCall = null;

    if (module !== null) {
      const params = {
        page: {number: 0, size: 100},
        remotefilter: {latestRuntime: true, module_id: this.filterModule.attributes.module_id},
      };

      this.runtimeCallService.all(params).subscribe(runtimeCalls => {
        this.runtimeCalls = runtimeCalls;
      });
    } else {
      this.runtimeCalls = null;
    }
  }

  applyFilters() {
    this.currentPage = 1;
    this.getExtrinsics(this.currentPage);
  }

  getExtrinsics(page: number): void {

    // tslint:disable-next-line:prefer-const
    let params = {
      page: {number: page, size: 25},
      remotefilter: {
        signed: 0
      },
    };

    if (this.filterModule !== null) {
      // @ts-ignore
      params.remotefilter.module_id = this.filterModule.attributes.module_id;
    }

    if (this.filterCall !== null) {
      // @ts-ignore
      params.remotefilter.call_id = this.filterCall.attributes.call_id;
    }

    this.extrinsicService.all(params).subscribe(extrinsics => {
      this.extrinsics = extrinsics;
    });
  }


  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
    this.fragmentSubsription.unsubscribe();
  }
}
