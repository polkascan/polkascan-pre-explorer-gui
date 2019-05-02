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
 * runtime-list.component.ts
 *
 */

import { Component, OnInit } from '@angular/core';
import {DocumentCollection} from "ngx-jsonapi";
import {Runtime} from "../../classes/runtime.class";
import {RuntimeService} from "../../services/runtime.service";

@Component({
  selector: 'app-runtime-list',
  templateUrl: './runtime-list.component.html',
  styleUrls: ['./runtime-list.component.scss']
})
export class RuntimeListComponent implements OnInit {

  public runtimes: DocumentCollection<Runtime>;

  constructor(
    private runtimeService: RuntimeService
  ) {

  }

  ngOnInit() {
    this.runtimeService.all({

    }).subscribe(runtimes => (this.runtimes = runtimes));
  }
}
