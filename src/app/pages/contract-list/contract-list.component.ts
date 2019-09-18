import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentCollection} from 'ngx-jsonapi';
import {Contract} from '../../classes/contract.class';
import {ContractService} from '../../services/contract.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss']
})
export class ContractListComponent implements OnInit, OnDestroy {

  public contracts: DocumentCollection<Contract>;
  currentPage = 1;

  private fragmentSubsription: Subscription;

  constructor(
    private contractService: ContractService,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.fragmentSubsription = this.activatedRoute.fragment.subscribe(value => {
      if (+value > 0) {
        this.currentPage = +value;
      } else {
        this.currentPage = 1;
      }
      this.getItems(this.currentPage);
    });
  }

  getItems(page: number): void {

    const params = {
      page: { number: page, size: 25},
      remotefilter: {},
    };

    this.contractService.all(params).subscribe(contracts => {
      this.contracts = contracts;
    });
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
    this.fragmentSubsription.unsubscribe();
  }

}
