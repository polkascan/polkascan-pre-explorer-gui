import { Component, OnInit } from '@angular/core';
import {DocumentCollection} from "ngx-jsonapi";
import {SessionValidator} from "../../classes/session-validator.class";
import {SessionValidatorService} from "../../services/session-validator.service";
import {environment} from "../../../environments/environment";
import {SessionNominator} from "../../classes/session-nominator.class";
import {SessionNominatorService} from "../../services/session-nominator.service";

@Component({
  selector: 'app-session-nominator-list',
  templateUrl: './session-nominator-list.component.html',
  styleUrls: ['./session-nominator-list.component.scss']
})
export class SessionNominatorListComponent implements OnInit {

  public nominators: DocumentCollection<SessionNominator>;

  public networkURLPrefix: string;
  public networkTokenDecimals: number;
  public networkTokenSymbol: string;

  currentPage = 1;

  constructor(
    private sessionNominatorService: SessionNominatorService
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

    this.sessionNominatorService.all(params).subscribe(nominators => {
      this.nominators = nominators;
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
