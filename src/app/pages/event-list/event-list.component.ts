import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentCollection} from 'ngx-jsonapi';
import {Event} from '../../classes/event.class';
import {EventService} from '../../services/event.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit, OnDestroy {

public events: DocumentCollection<Event>;

  public currentPage = 1;

  private fragmentSubsription: Subscription;

  constructor(
    private eventService: EventService,
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
      this.getEvents(this.currentPage);
    });
  }

  getEvents(page: number): void {
    this.eventService.all({
      page: { number: page, size: 25}
    }).subscribe(events => (this.events = events));
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
    this.fragmentSubsription.unsubscribe();
  }
}
