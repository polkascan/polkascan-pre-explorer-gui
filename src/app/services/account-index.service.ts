import { Injectable } from '@angular/core';
import {Autoregister, Service} from 'ngx-jsonapi';
import {AccountIndex} from '../classes/account-index.class';

@Injectable({
  providedIn: 'root'
})
@Autoregister()
export class AccountIndexService extends Service<AccountIndex> {
    public resource = AccountIndex;
    public type = 'accountindex';
    public path = 'accountindex';
}
