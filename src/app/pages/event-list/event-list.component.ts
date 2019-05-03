import { Component, OnInit } from '@angular/core';
import {DocumentCollection} from 'ngx-jsonapi';
import {Event} from '../../classes/event.class';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

public events: DocumentCollection<Event>;

  currentPage = 1;

  constructor(
    private eventService: EventService
  ) {

  }

  ngOnInit() {
    this.getEvents(this.currentPage);
  }

  getEvents(page: number): void {
    this.eventService.all({
      page: { number: page, size: 25}
    }).subscribe(events => (this.events = events));
  }

  getNextEvents(): void {
    this.currentPage += 1;
    this.getEvents(this.currentPage);
  }

}
