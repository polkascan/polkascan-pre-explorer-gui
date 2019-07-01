import { Component, OnInit } from '@angular/core';
import {DocumentCollection} from "ngx-jsonapi";
import {Session} from "../../classes/session.class";
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit {

  public sessions: DocumentCollection<Session>;
  currentPage = 1;

  constructor(
    private sessionService: SessionService
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

    this.sessionService.all(params).subscribe(sessions => {
      this.sessions = sessions;
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
