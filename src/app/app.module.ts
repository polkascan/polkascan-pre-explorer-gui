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
 * app.module.ts
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxJsonapiModule } from 'ngx-jsonapi';


import { BlockListComponent } from './pages/block-list/block-list.component';
import { BlockDetailComponent } from './pages/block-detail/block-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ExtrinsicDetailComponent } from './pages/extrinsic-detail/extrinsic-detail.component';
import { ExtrinsicTableComponent } from './components/extrinsic-table/extrinsic-table.component';
import { HarvesterAdminComponent } from './pages/harvester-admin/harvester-admin.component';
import { LoadingBoxComponent } from './components/loading-box/loading-box.component';
import {environment} from "../environments/environment";
import { PolkascanHeaderComponent } from './components/polkascan-header/polkascan-header.component';
import { AddressDetailComponent } from './pages/address-detail/address-detail.component';
import { EventTableComponent } from './components/event-table/event-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockListComponent,
    BlockDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SettingsComponent,
    ExtrinsicDetailComponent,
    ExtrinsicTableComponent,
    HarvesterAdminComponent,
    LoadingBoxComponent,
    PolkascanHeaderComponent,
    AddressDetailComponent,
    EventTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxJsonapiModule.forRoot({
        url: environment.jsonApiRootUrl
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
