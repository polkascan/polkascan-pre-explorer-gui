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

import { Component, OnInit } from '@angular/core';
import {DocumentCollection, Service} from 'ngx-jsonapi';
import {ExtrinsicService} from '../../services/extrinsic.service';
import {Extrinsic} from '../../classes/extrinsic.class';

@Component({
  selector: 'app-extrinsic-list',
  templateUrl: './extrinsic-list.component.html',
  styleUrls: ['./extrinsic-list.component.scss']
})
export class ExtrinsicListComponent implements OnInit {

  public extrinsics: DocumentCollection<Extrinsic>;
  currentPage = 0;

  constructor(
    private extrinsicService: ExtrinsicService
  ) {

  }

  ngOnInit() {
    this.getExtrinsics(this.currentPage);
  }

  getExtrinsics(page: number): void {
    this.extrinsicService.all({
      page: { number: page, size: 25}
    }).subscribe(extrinsics => {
      this.extrinsics = extrinsics;
    });
  }

  getNextExtrinsics(): void {
    this.currentPage += 1;
    this.getExtrinsics(this.currentPage);
  }
}
