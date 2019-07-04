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
 * block-detail.component.ts
 */

import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Block } from '../../classes/block.class';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlockService } from '../../services/block.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {ExtrinsicService} from '../../services/extrinsic.service';
import {EventService} from '../../services/event.service';
import {environment} from "../../../environments/environment";
import {BlockTotal} from "../../classes/block-total.class";
import {BlockTotalService} from "../../services/block-total.service";
import {LogService} from "../../services/log.service";

@Component({
  selector: 'app-block-detail',
  templateUrl: './block-detail.component.html',
  styleUrls: ['./block-detail.component.scss'],
})
export class BlockDetailComponent implements OnInit {

  block$: Observable<Block>;
  blockTotal$: Observable<BlockTotal>;

  public networkTokenDecimals: number;
  public networkTokenSymbol: string;

  constructor(
    private route: ActivatedRoute,
    private blockService: BlockService,
    private blockTotalService: BlockTotalService,
    private extrinsicService: ExtrinsicService,
    private eventService: EventService,
    private logService: LogService,
    private location: Location
  ) { }

  ngOnInit() {

    this.networkTokenDecimals = environment.networkTokenDecimals;
    this.networkTokenSymbol = environment.networkTokenSymbol;

    this.block$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          if (params.get('id')) {
            return this.blockService.get(params.get('id'), { include: ['extrinsics', 'events', 'logs'] });
          }
      })
    );

    this.blockTotal$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          if (params.get('id')) {
            return this.blockTotalService.get(params.get('id'), { });
          }
      })
    );
  }

  goBack(): void {
    this.location.back();
  }

}
