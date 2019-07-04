import { Injectable } from '@angular/core';
import {Autoregister, Service} from "ngx-jsonapi";
import {Log} from "../classes/log.class";

@Injectable({
  providedIn: 'root'
})
@Autoregister()
export class LogService extends Service<Log> {
    public resource = Log;
    public type = 'log';
    public path = 'log';
}
