import { Injectable } from '@angular/core';
import {Autoregister, Service} from 'ngx-jsonapi';
import {SessionNominator} from '../classes/session-nominator.class';

@Injectable({
  providedIn: 'root'
})
@Autoregister()
export class SessionNominatorService extends Service<SessionNominator> {
    public resource = SessionNominator;
    public type = 'sessionnominator';
    public path = 'session/nominator';
}
