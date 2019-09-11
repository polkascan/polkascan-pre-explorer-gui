import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {DemocracyProposal} from '../../classes/democracy-proposal.class';
import {DemocracyProposalService} from '../../services/democracy-proposal.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-democracy-proposal-detail',
  templateUrl: './democracy-proposal-detail.component.html',
  styleUrls: ['./democracy-proposal-detail.component.scss']
})
export class DemocracyProposalDetailComponent implements OnInit {

  public proposal$: Observable<DemocracyProposal>;

  public networkTokenDecimals: number;
  public networkTokenSymbol: string;
  public networkURLPrefix: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private democracyProposalService: DemocracyProposalService
  ) { }

  ngOnInit() {

    this.networkTokenDecimals = environment.networkTokenDecimals;
    this.networkTokenSymbol = environment.networkTokenSymbol;

    this.proposal$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
          return this.democracyProposalService.get(params.get('id'));
      })
    );
  }

  public formatBalance(balance: number) {
    return balance / Math.pow(10, this.networkTokenDecimals);
  }

}
