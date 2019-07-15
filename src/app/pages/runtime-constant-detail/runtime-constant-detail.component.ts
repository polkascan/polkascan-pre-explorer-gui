import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {RuntimeConstant} from '../../classes/runtime-constant.class';
import {RuntimeConstantService} from '../../services/runtime-constant.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-runtime-constant-detail',
  templateUrl: './runtime-constant-detail.component.html',
  styleUrls: ['./runtime-constant-detail.component.scss']
})
export class RuntimeConstantDetailComponent implements OnInit {

  runtimeConstant$: Observable<RuntimeConstant>;

  public networkTokenDecimals: number;
  public networkTokenSymbol: string;

  constructor(
    private route: ActivatedRoute,
    private runtimeConstantService: RuntimeConstantService
  ) { }

  ngOnInit() {

    this.networkTokenDecimals = environment.networkTokenDecimals;
    this.networkTokenSymbol = environment.networkTokenSymbol;

    this.runtimeConstant$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          if (params.get('id')) {
            return this.runtimeConstantService.get(params.get('id'));
          }
      })
    );
  }

  public formatBalance(balance: number) {
    return balance / Math.pow(10, this.networkTokenDecimals);
  }

}
