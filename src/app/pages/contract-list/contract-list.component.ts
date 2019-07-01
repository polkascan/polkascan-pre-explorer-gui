import { Component, OnInit } from '@angular/core';
import {DocumentCollection} from "ngx-jsonapi";
import {Contract} from "../../classes/contract.class";
import {ContractService} from "../../services/contract.service";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss']
})
export class ContractListComponent implements OnInit {

  public contracts: DocumentCollection<Contract>;
  currentPage = 1;

  constructor(
    private contractService: ContractService
  ) {

  }

  ngOnInit() {
    this.getItems(this.currentPage);
  }

  getItems(page: number): void {

    let params = {
      page: { number: page, size: 25},
      remotefilter: {},
    };

    this.contractService.all(params).subscribe(contracts => {
      this.contracts = contracts;
    });
  }

  refreshItems(): void {
    this.getItems(this.currentPage);
  }

  getNextItems(): void {
    this.currentPage += 1;
    this.refreshItems();
  }

}
