import {Component, OnDestroy, OnInit} from '@angular/core';
import {Log} from '../../classes/log.class';
import {DocumentCollection} from 'ngx-jsonapi';
import {LogService} from '../../services/log.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss']
})
export class LogListComponent implements OnInit, OnDestroy {

  public logs: DocumentCollection<Log>;
  currentPage = 1;

  private fragmentSubsription: Subscription;

  constructor(
    private logService: LogService,
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
      page: { number: page, size: 25},
      remotefilter: {},
    };

    this.logService.all(params).subscribe(logs => {
      this.logs = logs;
    });
  }

  refreshItems(): void {
    this.getItems(this.currentPage);
  }

  getNextItems(): void {
    this.currentPage += 1;
    this.refreshItems();
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
    this.fragmentSubsription.unsubscribe();
  }
}
