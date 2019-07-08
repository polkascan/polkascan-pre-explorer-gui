import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AccountIndex} from '../../classes/account-index.class';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {AccountIndexService} from '../../services/account-index.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-account-index-detail',
  templateUrl: './account-index-detail.component.html',
  styleUrls: ['./account-index-detail.component.scss']
})
export class AccountIndexDetailComponent implements OnInit {

  public accountIndex$: Observable<AccountIndex>;

  constructor(
    private accountIndexService: AccountIndexService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.accountIndex$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
          return this.accountIndexService.get(params.get('id'));
      })
    );
  }
}
