import { Injectable } from '@angular/core';
import {Autoregister, Service} from 'ngx-jsonapi';
import {RuntimeConstant} from '../classes/runtime-constant.class';

@Injectable({
  providedIn: 'root'
})
@Autoregister()
export class RuntimeConstantService extends Service<RuntimeConstant> {
  public resource = RuntimeConstant;
  public type = 'runtimeconstant';
  public path = 'runtime-constant';
}
