import { Component, OnInit } from '@angular/core';
import {DocumentCollection} from 'ngx-jsonapi';
import {environment} from '../../../environments/environment';
import {RuntimeModule} from '../../classes/runtime-module.class';
import {RuntimeModuleService} from '../../services/runtime-module.service';

@Component({
  selector: 'app-runtime-module-list',
  templateUrl: './runtime-module-list.component.html',
  styleUrls: ['./runtime-module-list.component.scss']
})
export class RuntimeModuleListComponent implements OnInit {

  public modules: DocumentCollection<RuntimeModule>;

  public networkURLPrefix: string;
  public networkTokenDecimals: number;
  public networkTokenSymbol: string;

  constructor(
    private runtimeModuleService: RuntimeModuleService
  ) {

  }

  ngOnInit() {

    this.networkTokenDecimals = environment.networkTokenDecimals;
    this.networkTokenSymbol = environment.networkTokenSymbol;

    this.getItems();
  }

  getItems(): void {

    const params = {
      remotefilter: {latestRuntime: true},
    };

    this.runtimeModuleService.all(params).subscribe(modules => {
      this.modules = modules;
    });
  }

}
