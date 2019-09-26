import { Component, OnDestroy, OnInit } from '@angular/core';
import { DocumentCollection } from 'ngx-jsonapi';
import { AccountIndexService } from '../../services/account-index.service';
import { AccountIndex } from '../../classes/account-index.class';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-index-list',
  templateUrl: './account-index-list.component.html',
  styleUrls: ['./account-index-list.component.scss']
})
export class AccountIndexListComponent implements OnInit, OnDestroy {

  public accountIndices: DocumentCollection<AccountIndex>;
  currentPage = 1;

  private fragmentSubsription: Subscription;

  constructor(
    private accountIndexService: AccountIndexService,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit() {
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
      page: { number: page, size: 25 },
      remotefilter: {},
    };

    this.accountIndexService.all(params).subscribe(accountIndices => {
      this.accountIndices = accountIndices;
    });
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
    this.fragmentSubsription.unsubscribe();
  }
}