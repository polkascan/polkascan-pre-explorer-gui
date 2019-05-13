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
 * extrinsic-detail.component.ts
 */

import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Extrinsic} from '../../classes/extrinsic.class';
import {ExtrinsicService} from '../../services/extrinsic.service';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-extrinsic-detail',
  templateUrl: './extrinsic-detail.component.html',
  styleUrls: ['./extrinsic-detail.component.scss']
})
export class ExtrinsicDetailComponent implements OnInit {

  extrinsic$: Observable<Extrinsic>;

  public networkTokenDecimals: number;
  public networkTokenSymbol: string;

  constructor(
    private route: ActivatedRoute,
    private extrinsicService: ExtrinsicService,
  ) { }

  ngOnInit() {

    this.networkTokenDecimals = environment.networkTokenDecimals;
    this.networkTokenSymbol = environment.networkTokenSymbol;

    this.extrinsic$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          return this.extrinsicService.get(params.get('id'));
      })
    );
  }
}
