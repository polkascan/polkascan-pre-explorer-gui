import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentCollection} from 'ngx-jsonapi';
import {RuntimeModule} from '../../classes/runtime-module.class';
import {RuntimeModuleService} from '../../services/runtime-module.service';
import {environment} from '../../../environments/environment';
import {RuntimeType} from '../../classes/runtime-type.class';
import {RuntimeTypeService} from '../../services/runtime-type.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-runtime-type-list',
  templateUrl: './runtime-type-list.component.html',
  styleUrls: ['./runtime-type-list.component.scss']
})
export class RuntimeTypeListComponent implements OnInit, OnDestroy {

  public types: DocumentCollection<RuntimeType>;

  public currentPage = 1;

  private fragmentSubsription: Subscription;

  public networkURLPrefix: string;
  public networkTokenDecimals: number;
  public networkTokenSymbol: string;

  constructor(
    private runtimeTypeService: RuntimeTypeService,
    private activatedRoute: ActivatedRoute
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
      remotefilter: {latestRuntime: true},
      page: { number: page, size: 50},
    };

    this.runtimeTypeService.all(params).subscribe(types => {
      this.types = types;
    });
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
    this.fragmentSubsription.unsubscribe();
  }
}
