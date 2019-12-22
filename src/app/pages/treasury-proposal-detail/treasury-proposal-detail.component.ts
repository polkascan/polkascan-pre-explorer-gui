import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {switchMap} from 'rxjs/operators';
import {TreasuryProposal} from '../../classes/treasury-proposal.class';
import {TreasuryProposalService} from '../../services/treasury-proposal.service';

@Component({
  selector: 'app-treasury-proposal-detail',
  templateUrl: './treasury-proposal-detail.component.html',
  styleUrls: ['./treasury-proposal-detail.component.scss']
})
export class TreasuryProposalDetailComponent implements OnInit, OnDestroy {

  public proposal$: Observable<TreasuryProposal>;

  public networkTokenDecimals: number;
  public networkTokenSymbol: string;
  public networkURLPrefix: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private treasuryProposalService: TreasuryProposalService,
  ) { }

  ngOnInit() {
    this.networkTokenDecimals = environment.networkTokenDecimals;
    this.networkTokenSymbol = environment.networkTokenSymbol;

    this.proposal$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
          return this.treasuryProposalService.get(params.get('id'));
      })
    );
  }

  public formatBalance(balance: number) {
    return balance / Math.pow(10, this.networkTokenDecimals);
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
  }

}
