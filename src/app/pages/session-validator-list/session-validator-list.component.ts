import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentCollection} from 'ngx-jsonapi';
import {SessionValidator} from '../../classes/session-validator.class';
import {SessionValidatorService} from '../../services/session-validator.service';
import {environment} from '../../../environments/environment';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-session-validator-list',
  templateUrl: './session-validator-list.component.html',
  styleUrls: ['./session-validator-list.component.scss']
})
export class SessionValidatorListComponent implements OnInit, OnDestroy {

  public validators: DocumentCollection<SessionValidator>;

  public networkURLPrefix: string;
  public networkTokenDecimals: number;
  public networkTokenSymbol: string;

  currentPage = 1;

  private fragmentSubsription: Subscription;

  constructor(
    private sessionValidatorService: SessionValidatorService,
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

    this.sessionValidatorService.all(params).subscribe(validators => {
      this.validators = validators;
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
