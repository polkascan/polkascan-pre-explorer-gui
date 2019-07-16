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
 * harvester-admin.component.ts
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import {Networkstats} from '../../classes/networkstats.class';
import {NetworkstatsService} from '../../services/networkstats.service';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-harvester-admin',
  templateUrl: './harvester-admin.component.html',
  styleUrls: ['./harvester-admin.component.scss']
})
export class HarvesterAdminComponent implements OnInit, OnDestroy {

  public networkstats$: Observable<Networkstats>;

  public harvesterQueue: Object;
  public harvesterQueue$: Observable<Object>;

  private statsUpdateSubsription: Subscription;
  public environment = environment;

  constructor(
    private networkstatsService: NetworkstatsService,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
     this.networkstats$ = this.networkstatsService.get('latest');

     this.harvesterQueue$ = this.httpClient.get(environment.jsonApiRootUrl + 'harvester/status');

     this.harvesterQueue$.subscribe((res: Object) => {
        this.harvesterQueue = res;
     });


     const updateCounter = interval(20000);

     this.statsUpdateSubsription = updateCounter.subscribe( n => this.networkstats$ = this.networkstatsService.get('latest'));
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
    this.statsUpdateSubsription.unsubscribe();
  }

  startHarvester() {
    this.httpClient.post(environment.jsonApiRootUrl + 'harvester/start', {}).subscribe((res: Object) => {

    });
  }

}
