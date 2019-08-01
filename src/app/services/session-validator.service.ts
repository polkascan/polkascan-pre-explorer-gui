import { Injectable } from '@angular/core';
import {Autoregister, Service} from 'ngx-jsonapi';
import {SessionValidator} from '../classes/session-validator.class';

@Injectable({
  providedIn: 'root'
})
@Autoregister()
export class SessionValidatorService extends Service<SessionValidator> {
    public resource = SessionValidator;
    public type = 'sessionvalidator';
    public path = 'session/validator';
}
