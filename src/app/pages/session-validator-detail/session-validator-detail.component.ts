import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Session} from '../../classes/session.class';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {SessionService} from '../../services/session.service';
import {SessionValidatorService} from '../../services/session-validator.service';
import {environment} from '../../../environments/environment';
import {switchMap} from 'rxjs/operators';
import {SessionValidator} from '../../classes/session-validator.class';
import {SessionNominatorService} from '../../services/session-nominator.service';

@Component({
  selector: 'app-session-validator-detail',
  templateUrl: './session-validator-detail.component.html',
  styleUrls: ['./session-validator-detail.component.scss']
})
export class SessionValidatorDetailComponent implements OnInit {

  public sessionValidator$: Observable<SessionValidator>;
  public networkURLPrefix: string;
  public networkTokenDecimals: number;
  public networkTokenSymbol: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sessionValidatorService: SessionValidatorService,
    private sessionNominatorService: SessionNominatorService
  ) { }

  ngOnInit() {
    this.networkTokenDecimals = environment.networkTokenDecimals;
    this.networkTokenSymbol = environment.networkTokenSymbol;

    this.sessionValidator$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
          return this.sessionValidatorService.get(params.get('id'), { include: ['nominators'] });
      })
    );
  }

  public formatBalance(balance: number) {
    return balance / Math.pow(10, this.networkTokenDecimals);
  }

}
