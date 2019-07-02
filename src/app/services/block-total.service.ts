import { Injectable } from '@angular/core';
import {Autoregister, Service} from "ngx-jsonapi";
import {BlockTotal} from "../classes/block-total.class";

@Injectable({
  providedIn: 'root'
})
@Autoregister()
export class BlockTotalService extends Service<BlockTotal> {
    public resource = BlockTotal;
    public type = 'block-total';
    public path = 'system/block-total';
}
