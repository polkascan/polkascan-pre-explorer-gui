import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentCollection} from 'ngx-jsonapi';
import {SessionValidator} from '../../classes/session-validator.class';
import {SessionValidatorService} from '../../services/session-validator.service';
import {environment} from '../../../environments/environment';
import {SessionNominator} from '../../classes/session-nominator.class';
import {SessionNominatorService} from '../../services/session-nominator.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-session-nominator-list',
  templateUrl: './session-nominator-list.component.html',
  styleUrls: ['./session-nominator-list.component.scss']
})
export class SessionNominatorListComponent implements OnInit, OnDestroy {

  public nominators: DocumentCollection<SessionNominator>;

  public networkURLPrefix: string;
  public networkTokenDecimals: number;
  public networkTokenSymbol: string;

  currentPage = 1;

  private fragmentSubsription: Subscription;

  constructor(
    private sessionNominatorService: SessionNominatorService,
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
      page: { number: page, size: 25},
      remotefilter: {latestSession: true},
    };

    this.sessionNominatorService.all(params).subscribe(nominators => {
      this.nominators = nominators;
    });
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
    this.fragmentSubsription.unsubscribe();
  }

  public formatBalance(balance: number) {
    return balance / Math.pow(10, this.networkTokenDecimals);
  }

}
