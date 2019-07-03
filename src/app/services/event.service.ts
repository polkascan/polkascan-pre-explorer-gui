import { Injectable } from '@angular/core';
import {Autoregister, Service} from 'ngx-jsonapi';
import {Event} from '../classes/event.class';

@Injectable({
  providedIn: 'root'
})
@Autoregister()
export class EventService extends Service<Event> {
    public resource = Event;
    public type = 'event';
    public path = 'event';
}
