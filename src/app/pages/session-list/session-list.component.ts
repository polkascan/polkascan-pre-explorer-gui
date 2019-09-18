import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentCollection} from 'ngx-jsonapi';
import {Session} from '../../classes/session.class';
import {SessionService} from '../../services/session.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit, OnDestroy {

  public sessions: DocumentCollection<Session>;
  currentPage = 1;

  private fragmentSubsription: Subscription;

  constructor(
    private sessionService: SessionService,
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

    this.sessionService.all(params).subscribe(sessions => {
      this.sessions = sessions;
    });
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
    this.fragmentSubsription.unsubscribe();
  }

}
