import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router'
import {BalanceTransferService} from '../../services/balance-transfer.service';
import {DocumentCollection} from 'ngx-jsonapi';
import {BalanceTransfer} from '../../classes/balancetransfer.class';
import {environment} from "../../../environments/environment";
import {Extrinsic} from "../../classes/extrinsic.class";
import {ExtrinsicService} from "../../services/extrinsic.service";


@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.scss']
})
export class AddressDetailComponent implements OnInit {

  public balanceTransfers: DocumentCollection<BalanceTransfer>;
  public extrinsics: DocumentCollection<Extrinsic>;

  public account: string;
  public networkTokenDecimals: number;
  public networkTokenSymbol: string;

  constructor(
    private balanceTransferService: BalanceTransferService,
    private extrinsicService: ExtrinsicService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.networkTokenDecimals = environment.networkTokenDecimals;
    this.networkTokenSymbol = environment.networkTokenSymbol;

    this.activatedRoute.params.subscribe(val => {
      this.account = val.id;

      this.balanceTransferService.all({
        remotefilter: {address: this.account},
        page: { number: 0}
      }).subscribe(balanceTransfers => (this.balanceTransfers = balanceTransfers));

      let params = {
        page: {number: 0, size: 25},
        remotefilter:{address: val.id},
      };

      this.extrinsicService.all(params).subscribe(extrinsics => {
        this.extrinsics = extrinsics;
      });

    });
  }

   public formatBalance(balance: number) {
    return balance / Math.pow(10, this.networkTokenDecimals);
  }
}
