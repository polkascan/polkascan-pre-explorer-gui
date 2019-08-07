import { Component, OnInit } from '@angular/core';
import {DocumentCollection} from 'ngx-jsonapi';
import {SessionValidator} from '../../classes/session-validator.class';
import {SessionValidatorService} from '../../services/session-validator.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-session-validator-list',
  templateUrl: './session-validator-list.component.html',
  styleUrls: ['./session-validator-list.component.scss']
})
export class SessionValidatorListComponent implements OnInit {

  public validators: DocumentCollection<SessionValidator>;

  public networkURLPrefix: string;
  public networkTokenDecimals: number;
  public networkTokenSymbol: string;

  currentPage = 1;

  constructor(
    private sessionValidatorService: SessionValidatorService
  ) {

  }

  ngOnInit() {

    this.networkTokenDecimals = environment.networkTokenDecimals;
    this.networkTokenSymbol = environment.networkTokenSymbol;

    this.getItems(this.currentPage);
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

  refreshItems(): void {
    this.getItems(this.currentPage);
  }

  getNextItems(): void {
    this.currentPage += 1;
    this.refreshItems();
  }

  public formatBalance(balance: number) {
    return balance / Math.pow(10, this.networkTokenDecimals);
  }
}
