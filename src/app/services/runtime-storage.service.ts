import { Injectable } from '@angular/core';
import {Autoregister, Service} from "ngx-jsonapi";
import {RuntimeStorage} from "../classes/runtime-storage.class";

@Injectable({
  providedIn: 'root'
})
@Autoregister()
export class RuntimeStorageService extends Service<RuntimeStorage> {
  public resource = RuntimeStorage;
  public type = 'runtimestorage';
  public path = 'runtime-storage';
}
