import { Component, OnInit } from '@angular/core';
import {DocumentCollection} from "ngx-jsonapi";
import {BalanceTransfer} from "../../classes/balancetransfer.class";
import {BalanceTransferService} from "../../services/balance-transfer.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-balances-transfer-list',
  templateUrl: './balances-transfer-list.component.html',
  styleUrls: ['./balances-transfer-list.component.scss']
})
export class BalancesTransferListComponent implements OnInit {

  public balanceTransfers: DocumentCollection<BalanceTransfer>;
  currentPage = 1;

  public networkTokenDecimals: number;
  public networkTokenSymbol: string;

  constructor(
    private balanceTransferService: BalanceTransferService
  ) {

  }

  ngOnInit() {
    this.networkTokenDecimals = environment.networkTokenDecimals;
    this.networkTokenSymbol = environment.networkTokenSymbol;
    this.getItems(this.currentPage);
  }

  getItems(page: number): void {

    let params = {
      page: { number: page, size: 25},
      remotefilter: {},
    };

    this.balanceTransferService.all(params).subscribe(balanceTransfers => {
      this.balanceTransfers = balanceTransfers;
    });
  }

  refreshItems(): void {
    this.getItems(this.currentPage);
  }

  getNextItems(): void {
    this.currentPage += 1;
    this.refreshItems();
  }

  public formatBalance(balance: number) {
    return balance / Math.pow(10, this.networkTokenDecimals);
  }

}
