import { Injectable } from '@angular/core';
import {Autoregister, Service} from "ngx-jsonapi";
import {Runtime} from "../classes/runtime.class";

@Injectable({
  providedIn: 'root'
})
@Autoregister()
export class RuntimeTypeService extends Service<Runtime> {
    public resource = Runtime;
    public type = 'runtimetype';
    public path = 'runtime-type';
}
