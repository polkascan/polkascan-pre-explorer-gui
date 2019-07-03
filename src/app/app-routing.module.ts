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
import {EventDetailComponent} from './pages/event-detail/event-detail.component';
import {ExtrinsicListComponent} from './pages/extrinsic-list/extrinsic-list.component';
import {EventListComponent} from './pages/event-list/event-list.component';
import {RuntimeListComponent} from "./pages/runtime-list/runtime-list.component";
import {RuntimeDetailComponent} from "./pages/runtime-detail/runtime-detail.component";
import {RuntimeModuleDetailComponent} from "./pages/runtime-module-detail/runtime-module-detail.component";
import {RuntimeCallDetailComponent} from "./pages/runtime-call-detail/runtime-call-detail.component";
import {RuntimeEventDetailComponent} from "./pages/runtime-event-detail/runtime-event-detail.component";
import {RuntimeStorageDetailComponent} from "./pages/runtime-storage-detail/runtime-storage-detail.component";
import {AccountDetailComponent} from "./pages/account-detail/account-detail.component";
import {ContractDetailComponent} from "./pages/contract-detail/contract-detail.component";
import {ContractListComponent} from "./pages/contract-list/contract-list.component";
import {AccountListComponent} from "./pages/account-list/account-list.component";
import {SessionListComponent} from "./pages/session-list/session-list.component";
import {SessionDetailComponent} from "./pages/session-detail/session-detail.component";
import {DemocracyProposalListComponent} from "./pages/democracy-proposal-list/democracy-proposal-list.component";
import {DemocracyProposalDetailComponent} from "./pages/democracy-proposal-detail/democracy-proposal-detail.component";
import {BalancesTransferListComponent} from "./pages/balances-transfer-list/balances-transfer-list.component";
import {BalancesTransferDetailComponent} from "./pages/balances-transfer-detail/balances-transfer-detail.component";

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'block', component: BlockListComponent },
  { path: 'block/:id', component: BlockDetailComponent },
  { path: 'extrinsic', component: ExtrinsicListComponent},
  { path: 'extrinsic/:id', component: ExtrinsicDetailComponent},
  { path: 'event', component: EventListComponent},
  { path: 'event/:id', component: EventDetailComponent},
  { path: 'runtime', component: RuntimeListComponent },
  { path: 'runtime/:id', component: RuntimeDetailComponent },
  { path: 'runtime-module/:id', component: RuntimeModuleDetailComponent },
  { path: 'runtime-call/:id', component: RuntimeCallDetailComponent },
  { path: 'runtime-event/:id', component: RuntimeEventDetailComponent},
  { path: 'runtime-storage/:id', component: RuntimeStorageDetailComponent},
  { path: 'account', component: AccountListComponent},
  { path: 'account/:id', component: AccountDetailComponent},
  { path: 'contracts/contract', component: ContractListComponent},
  { path: 'contracts/contract/:id', component: ContractDetailComponent},
  { path: 'session/session', component: SessionListComponent},
  { path: 'session/session/:id', component: SessionDetailComponent},
  { path: 'democracy/proposal', component: DemocracyProposalListComponent},
  { path: 'democracy/proposal/:id', component: DemocracyProposalDetailComponent},
  { path: 'balances/transfer', component: BalancesTransferListComponent},
  { path: 'balances/transfer/:id', component: BalancesTransferDetailComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'harvester/admin', component: HarvesterAdminComponent },

  // Redirect old URLs
  { path: 'system/block/:id', redirectTo: '/block/:id' },
  { path: 'system/block', redirectTo: '/block' },
  { path: 'system/extrinsic/:id', redirectTo: '/extrinsic/:id'},
  { path: 'system/extrinsic', redirectTo: '/extrinsic'},
  { path: 'system/event/:id', redirectTo: '/event/:id'},
  { path: 'system/event', redirectTo: '/event'},
  { path: 'system/runtime/:id', redirectTo: '/runtime/:id' },
  { path: 'system/runtime', redirectTo: '/runtime' },
  { path: 'system/runtime-module/:id', redirectTo: '/runtime-module/:id' },
  { path: 'system/runtime-call/:id', redirectTo: '/runtime-call/:id' },
  { path: 'system/runtime-event/:id', redirectTo: '/runtime-event/:id'},
  { path: 'system/runtime-storage/:id', redirectTo: '/runtime-storage/:id'},
  { path: 'system/account/:id', redirectTo: '/account/:id'},
  { path: 'module/account/:id', redirectTo: '/account/:id',},
  { path: 'system/account', redirectTo: '/account'},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
