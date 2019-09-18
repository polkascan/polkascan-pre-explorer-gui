import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentCollection} from 'ngx-jsonapi';
import {Event} from '../../classes/event.class';
import {EventService} from '../../services/event.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {RuntimeModule} from '../../classes/runtime-module.class';
import {RuntimeEvent} from '../../classes/runtime-event.class';
import {RuntimeModuleService} from '../../services/runtime-module.service';
import {RuntimeEventService} from '../../services/runtime-event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit, OnDestroy {

  public events: DocumentCollection<Event>;

  public runtimeModules: DocumentCollection<RuntimeModule>;
  public runtimeEvents: DocumentCollection<RuntimeEvent>;
  public filterModule: RuntimeModule = null;
  public filterEvent: RuntimeEvent = null;

  public currentPage = 1;

  private fragmentSubsription: Subscription;

  constructor(
    private eventService: EventService,
    private runtimeModuleService: RuntimeModuleService,
    private runtimeEventService: RuntimeEventService,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    // Fetch runtime modules for filtering
    const params = {
      remotefilter: {latestRuntime: true},
    };

    this.runtimeModuleService.all(params).subscribe(runtimeModules => {
      this.runtimeModules = runtimeModules;
    });

    // store paging as location fragment
    this.fragmentSubsription = this.activatedRoute.fragment.subscribe(value => {
      if (+value > 0) {
        this.currentPage = +value;
      } else {
        this.currentPage = 1;
      }
      this.getEvents(this.currentPage);
    });
  }

  selectModule(module) {

    this.filterModule = module;
    this.filterEvent = null;

    if (module !== null) {
      const params = {
        page: {number: 0, size: 100},
        remotefilter: {latestRuntime: true, module_id: this.filterModule.attributes.module_id},
      };

      this.runtimeEventService.all(params).subscribe(runtimeEvents => {
        this.runtimeEvents = runtimeEvents;
      });
    } else {
      this.runtimeEvents = null;
    }
  }

  applyFilters() {
    this.currentPage = 1;
    this.getEvents(this.currentPage);
  }

  getEvents(page: number): void {

    // tslint:disable-next-line:prefer-const
    let params = {
      page: {number: page, size: 25},
      remotefilter: {}
    };

    if (this.filterModule !== null) {
      // @ts-ignore
      params.remotefilter.module_id = this.filterModule.attributes.module_id;
    }

    if (this.filterEvent !== null) {
      // @ts-ignore
      params.remotefilter.event_id = this.filterEvent.attributes.event_id;
    }

    this.eventService.all(params).subscribe(events => (this.events = events));
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
    this.fragmentSubsription.unsubscribe();
  }
}
