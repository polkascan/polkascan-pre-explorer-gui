import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Extrinsic} from '../../classes/extrinsic.class';
import {Block} from '../../classes/block.class';
import {Account} from '../../classes/account.class';
import {ExtrinsicService} from '../../services/extrinsic.service';
import {AccountService} from '../../services/account.service';
import {AccountIndexService} from '../../services/account-index.service';
import {BlockService} from '../../services/block.service';
import {AccountIndex} from '../../classes/account-index.class';

@Component({
  selector: 'app-analytics-search',
  templateUrl: './analytics-search.component.html',
  styleUrls: ['./analytics-search.component.scss']
})
export class AnalyticsSearchComponent implements OnInit {

  public searchQuery: string;
  public currentSearchQuery: string;

  public networkURLPrefix: string;
  public loadingCount: number;
  public replaceUrl: boolean;

  public account: Account;
  public accountIndex: AccountIndex;
  public block: Block;
  public extrinsic: Extrinsic;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private extrinsicService: ExtrinsicService,
    private accountService: AccountService,
    private accountIndexService: AccountIndexService,
    private blockService: BlockService,
  ) { }

  ngOnInit() {
    this.searchQuery = '';
    this.loadingCount = 0;
    this.networkURLPrefix = '';
    this.replaceUrl = false;

    if (this.route.snapshot.paramMap.get('query') !== null) {
      this.searchQuery = this.route.snapshot.paramMap.get('query');
      this.replaceUrl = true;
      this.search();
    } else {
      this.replaceUrl = false;
    }
  }

  public search(): void {

    // Strip whitespace from search text
    this.currentSearchQuery = this.searchQuery.trim();

    if (this.currentSearchQuery !== '') {

      // Reset results
      this.account = null;
      this.block = null;
      this.extrinsic = null;

      // Search extrinsic
      if (this.currentSearchQuery.startsWith('0x') || this.currentSearchQuery.includes('-')) {
        this.loadingCount++;
        this.extrinsicService.get(this.currentSearchQuery).subscribe(extrinsic => {
          this.extrinsic = extrinsic;
        }, error => {
          this.loadingCount--;
        }, () => {
          if (this.extrinsic.attributes.extrinsic_hash) {
            this.router.navigate(
              [this.networkURLPrefix, 'transaction', '0x' + this.extrinsic.attributes.extrinsic_hash],
              { replaceUrl: this.replaceUrl }
            );
          } else {
            this.router.navigate([this.networkURLPrefix, 'inherent', this.extrinsic.id]);
          }
          this.loadingCount--;
        });
      }

      // Search accounts
      this.loadingCount++;
      this.accountService.get(this.currentSearchQuery).subscribe(account => {
        this.account = account;
      }, error => {
        this.loadingCount--;
      }, () => {
        this.router.navigate(
          [this.networkURLPrefix, 'account', this.account.id],
          { replaceUrl: this.replaceUrl }
          );
        this.loadingCount--;
      });

      // Search block
      if (this.currentSearchQuery.startsWith('0x') || +this.currentSearchQuery) {
        this.loadingCount++;
        this.blockService.get(this.currentSearchQuery).subscribe(block => {
          this.block = block;
        }, error => {
          this.loadingCount--;
        }, () => {
          this.router.navigate(
            [this.networkURLPrefix, 'block', this.block.attributes.id],
            { replaceUrl: this.replaceUrl }
            );
          this.loadingCount--;
        });
      }

      // Search account indices
      this.loadingCount++;
      this.accountIndexService.get(this.currentSearchQuery).subscribe(accountIndex => {
        this.accountIndex = accountIndex;
      }, error => {
        this.loadingCount--;
      }, () => {
        this.router.navigate(
          [this.networkURLPrefix, 'indices', 'account', this.accountIndex.id],
          { replaceUrl: this.replaceUrl }
          );
        this.loadingCount--;
      });
    }
  }

}
