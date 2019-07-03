import { Injectable } from '@angular/core';
import {Autoregister, Service} from "ngx-jsonapi";
import {BalanceTransfer} from "../classes/balancetransfer.class";

@Injectable({
  providedIn: 'root'
})
@Autoregister()
export class BalanceTransferService extends Service<BalanceTransfer> {
    public resource = BalanceTransfer;
    public type = 'balancetransfer';
    public path = 'balances/transfer'
}
