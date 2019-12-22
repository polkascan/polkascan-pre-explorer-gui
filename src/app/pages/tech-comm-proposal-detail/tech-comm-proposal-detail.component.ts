import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {switchMap} from 'rxjs/operators';
import {TechCommProposal} from '../../classes/tech-comm-proposal.class';
import {TechCommProposalService} from '../../services/tech-comm-proposal.service';
import {TechCommProposalVoteService} from '../../services/tech-comm-proposal-vote.service';

@Component({
  selector: 'app-tech-comm-proposal-detail',
  templateUrl: './tech-comm-proposal-detail.component.html',
  styleUrls: ['./tech-comm-proposal-detail.component.scss']
})
export class TechCommProposalDetailComponent implements OnInit, OnDestroy {

  public proposal$: Observable<TechCommProposal>;

  public networkTokenDecimals: number;
  public networkTokenSymbol: string;
  public networkURLPrefix: string;
  public currentTab: string;

  private fragmentSubsription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private techCommProposalService: TechCommProposalService,
    private techCommProposalVoteService: TechCommProposalVoteService
  ) { }

  ngOnInit() {
    this.currentTab = 'proposal';
    this.networkTokenDecimals = environment.networkTokenDecimals;
    this.networkTokenSymbol = environment.networkTokenSymbol;

    this.proposal$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
          return this.techCommProposalService.get(params.get('id'), { include: ['votes'] });
      })
    );

    this.fragmentSubsription = this.activatedRoute.fragment.subscribe(value => {
      if (value === 'proposal' || value === 'votes') {
        this.currentTab = value;
      }
    });
  }

  public formatBalance(balance: number) {
    return balance / Math.pow(10, this.networkTokenDecimals);
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
    this.fragmentSubsription.unsubscribe();
  }

}
