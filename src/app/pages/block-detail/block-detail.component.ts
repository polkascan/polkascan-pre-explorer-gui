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
import {ExtrinsicService} from "../../services/extrinsic.service";

@Component({
  selector: 'app-block-detail',
  templateUrl: './block-detail.component.html',
  styleUrls: ['./block-detail.component.scss'],
})
export class BlockDetailComponent implements OnInit {

  //@Input() block: Block;

  block$: Observable<Block>;

  constructor(
    private route: ActivatedRoute, 
    private blockService: BlockService, 
    private extrinsicService: ExtrinsicService,
    private location: Location
  ) { }

  ngOnInit() {
    this.block$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          if (params.get('id')) {
            return this.blockService.get(params.get('id'), { include: ['extrinsics'] });
          }
      })
    );
  }

  // getBlock(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   if (id > 0) {
  //     this.blockService.getBlockById(id).subscribe(blocks => this.block = blocks);
  //   }

  //   const hash = this.route.snapshot.paramMap.get('hash');

  //   if (hash !== null) {
  //     this.blockService.getBlockByHash(hash).subscribe(blocks => this.block = blocks);
  //   }

  // }

  goBack(): void {
    this.location.back();
  }

}
