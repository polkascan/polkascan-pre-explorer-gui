import { Component, OnInit } from '@angular/core';
import {DocumentCollection} from 'ngx-jsonapi';
import {AccountIndexService} from '../../services/account-index.service';
import {AccountIndex} from '../../classes/account-index.class';

@Component({
  selector: 'app-account-index-list',
  templateUrl: './account-index-list.component.html',
  styleUrls: ['./account-index-list.component.scss']
})
export class AccountIndexListComponent implements OnInit {

  public accountIndices: DocumentCollection<AccountIndex>;
  currentPage = 1;

  constructor(
    private accountIndexService: AccountIndexService
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

    this.accountIndexService.all(params).subscribe(accountIndices => {
      this.accountIndices = accountIndices;
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
