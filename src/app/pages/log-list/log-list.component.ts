import { Component, OnInit } from '@angular/core';
import {Log} from "../../classes/log.class";
import {DocumentCollection} from "ngx-jsonapi";
import {LogService} from "../../services/log.service";

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss']
})
export class LogListComponent implements OnInit {

  public logs: DocumentCollection<Log>;
  currentPage = 1;

  constructor(
    private logService: LogService
  ) {

  }

  ngOnInit() {
    this.getItems(this.currentPage);
  }

  getItems(page: number): void {

    let params = {
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

}
