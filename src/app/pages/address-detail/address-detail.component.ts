import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router'
import {BalanceTransferService} from '../../services/balance-transfer.service';
import {DocumentCollection} from 'ngx-jsonapi';
import {BalanceTransfer} from '../../classes/balancetransfer.class';


@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.scss']
})
export class AddressDetailComponent implements OnInit {

  public balanceTransfers: DocumentCollection<BalanceTransfer>;
  public account: string;

  constructor(private balanceTransferService: BalanceTransferService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(val => {
      this.account = val.id;
      // console.log(blake2b(val.id.slice(0, 33)));
      this.balanceTransferService.all({
        remotefilter: {address: this.account},
        page: { number: 0}
      }).subscribe(balanceTransfers => (this.balanceTransfers = balanceTransfers));
    });
  }
}
