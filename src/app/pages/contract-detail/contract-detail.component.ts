import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Contract} from "../../classes/contract.class";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ContractService} from "../../services/contract.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.scss']
})
export class ContractDetailComponent implements OnInit {

  public contract$: Observable<Contract>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contractService: ContractService
  ) { }

  ngOnInit() {
    this.contract$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
          return this.contractService.get(params.get('id'));
      })
    );
  }
}
