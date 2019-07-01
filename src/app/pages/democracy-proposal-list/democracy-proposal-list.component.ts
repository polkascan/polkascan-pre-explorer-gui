import { Component, OnInit } from '@angular/core';
import {DocumentCollection} from "ngx-jsonapi";
import {DemocracyProposal} from "../../classes/democracy-proposal.class";
import {DemocracyProposalService} from "../../services/democracy-proposal.service";

@Component({
  selector: 'app-democracy-proposal-list',
  templateUrl: './democracy-proposal-list.component.html',
  styleUrls: ['./democracy-proposal-list.component.scss']
})
export class DemocracyProposalListComponent implements OnInit {

  public proposals: DocumentCollection<DemocracyProposal>;
  currentPage = 1;

  constructor(
    private democracyProposalService: DemocracyProposalService
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

    this.democracyProposalService.all(params).subscribe(proposals => {
      this.proposals = proposals;
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
