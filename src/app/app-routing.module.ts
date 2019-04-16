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
 * app-routing.module.ts
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockListComponent } from './pages/block-list/block-list.component';
import { BlockDetailComponent } from './pages/block-detail/block-detail.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ExtrinsicDetailComponent} from './pages/extrinsic-detail/extrinsic-detail.component';
import {AddressDetailComponent} from './pages/address-detail/address-detail.component';
import {HarvesterAdminComponent} from './pages/harvester-admin/harvester-admin.component';
import {SettingsComponent} from './pages/settings/settings.component';

const routes: Routes = [
  { path: 'system/block', component: BlockListComponent },
  { path: 'harvester/admin', component: HarvesterAdminComponent },
  { path: 'system/block/:id', component: BlockDetailComponent },
  { path: 'system/extrinsic/:id', component: ExtrinsicDetailComponent},
  { path: 'system/account/:id', component: AddressDetailComponent},
  { path: '', component: DashboardComponent},
  { path: 'settings', component: SettingsComponent},
  // { path: '', redirectTo: '/blocks', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
