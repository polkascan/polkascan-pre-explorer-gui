import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {switchMap} from 'rxjs/operators';
import {CouncilMotion} from '../../classes/council-motion.class';
import {CouncilVoteService} from '../../services/council-vote.service';
import {CouncilMotionService} from '../../services/council-motion.service';

@Component({
  selector: 'app-council-motion-detail',
  templateUrl: './council-motion-detail.component.html',
  styleUrls: ['./council-motion-detail.component.scss']
})
export class CouncilMotionDetailComponent implements OnInit, OnDestroy {

  public councilMotion$: Observable<CouncilMotion>;

  public networkTokenDecimals: number;
  public networkTokenSymbol: string;
  public networkURLPrefix: string;
  public currentTab: string;

  private fragmentSubsription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private councilMotionService: CouncilMotionService,
    private councilVoteService: CouncilVoteService
  ) { }

  ngOnInit() {
    this.currentTab = 'proposal';
    this.networkTokenDecimals = environment.networkTokenDecimals;
    this.networkTokenSymbol = environment.networkTokenSymbol;

    this.councilMotion$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
          return this.councilMotionService.get(params.get('id'), { include: ['votes'] });
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
