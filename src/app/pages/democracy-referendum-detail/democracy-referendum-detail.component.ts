import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {DemocracyReferendum} from '../../classes/democracy-referendum.class';
import {DemocracyReferendumService} from '../../services/democracy-referendum.service';
import {environment} from '../../../environments/environment';
import {DemocracyVoteService} from '../../services/democracy-vote.service';

@Component({
  selector: 'app-democracy-referendum-detail',
  templateUrl: './democracy-referendum-detail.component.html',
  styleUrls: ['./democracy-referendum-detail.component.scss']
})
export class DemocracyReferendumDetailComponent implements OnInit, OnDestroy {

  public referendum$: Observable<DemocracyReferendum>;

  public networkTokenDecimals: number;
  public networkTokenSymbol: string;
  public networkURLPrefix: string;
  public currentTab: string;

  private fragmentSubsription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private democracyReferendumService: DemocracyReferendumService,
    private democracyVoteService: DemocracyVoteService
  ) { }

  ngOnInit() {
    this.currentTab = 'proposal';
    this.networkTokenDecimals = environment.networkTokenDecimals;
    this.networkTokenSymbol = environment.networkTokenSymbol;

    this.referendum$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
          return this.democracyReferendumService.get(params.get('id'), { include: ['votes'] });
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
