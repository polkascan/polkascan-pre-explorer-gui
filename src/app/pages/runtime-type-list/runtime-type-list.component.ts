import { Component, OnInit } from '@angular/core';
import {DocumentCollection} from "ngx-jsonapi";
import {RuntimeModule} from "../../classes/runtime-module.class";
import {RuntimeModuleService} from "../../services/runtime-module.service";
import {environment} from "../../../environments/environment";
import {RuntimeType} from "../../classes/runtime-type.class";
import {RuntimeTypeService} from "../../services/runtime-type.service";

@Component({
  selector: 'app-runtime-type-list',
  templateUrl: './runtime-type-list.component.html',
  styleUrls: ['./runtime-type-list.component.scss']
})
export class RuntimeTypeListComponent implements OnInit {

  public types: DocumentCollection<RuntimeType>;

  public networkURLPrefix: string;
  public networkTokenDecimals: number;
  public networkTokenSymbol: string;

  constructor(
    private runtimeTypeService: RuntimeTypeService
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

    this.runtimeTypeService.all(params).subscribe(types => {
      this.types = types;
    });
  }

}
