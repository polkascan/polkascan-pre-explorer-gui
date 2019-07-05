import { Injectable } from '@angular/core';
import {Autoregister, Service} from 'ngx-jsonapi';
import {DemocracyReferendum} from '../classes/democracy-referendum.class';

@Injectable({
  providedIn: 'root'
})
@Autoregister()
export class DemocracyReferendumService extends Service<DemocracyReferendum> {
    public resource = DemocracyReferendum;
    public type = 'democracyreferendum';
    public path = 'democracy/referendum';
}
