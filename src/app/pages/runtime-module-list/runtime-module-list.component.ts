import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentCollection} from 'ngx-jsonapi';
import {environment} from '../../../environments/environment';
import {RuntimeModule} from '../../classes/runtime-module.class';
import {RuntimeModuleService} from '../../services/runtime-module.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-runtime-module-list',
  templateUrl: './runtime-module-list.component.html',
  styleUrls: ['./runtime-module-list.component.scss']
})
export class RuntimeModuleListComponent implements OnInit, OnDestroy {

  public modules: DocumentCollection<RuntimeModule>;
  public currentPage = 1;
  public networkURLPrefix: string;
  public networkTokenDecimals: number;
  public networkTokenSymbol: string;
  private fragmentSubsription: Subscription;

  constructor(
    private runtimeModuleService: RuntimeModuleService,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit() {

    this.networkTokenDecimals = environment.networkTokenDecimals;
    this.networkTokenSymbol = environment.networkTokenSymbol;

    this.fragmentSubsription = this.activatedRoute.fragment.subscribe(value => {
      if (+value > 0) {
        this.currentPage = +value;
      } else {
        this.currentPage = 1;
      }
      this.getItems(this.currentPage);
    });
  }

  getItems(page: number): void {

    const params = {
      page: { number: page, size: 25},
      remotefilter: {latestRuntime: true},
    };

    this.runtimeModuleService.all(params).subscribe(modules => {
      this.modules = modules;
    });
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
    this.fragmentSubsription.unsubscribe();
  }

}
