import { Component, OnInit } from '@angular/core';
import {DocumentCollection} from 'ngx-jsonapi';
import {Account} from '../../classes/account.class';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  public accounts: DocumentCollection<Account>;
  currentPage = 1;

  constructor(
    private accountService: AccountService
  ) {

  }

  ngOnInit() {
    this.getItems(this.currentPage);
  }

  getItems(page: number): void {

    const params = {
      page: { number: page, size: 25},
      remotefilter: {},
    };

    this.accountService.all(params).subscribe(accounts => {
      this.accounts = accounts;
    });
  }

  refreshItems(): void {
    this.getItems(this.currentPage);
  }

  getNextItems(): void {
    this.currentPage += 1;
    this.refreshItems();
  }

}
