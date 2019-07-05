import { Component, OnInit } from '@angular/core';
import {DocumentCollection} from "ngx-jsonapi";
import {DemocracyProposalService} from "../../services/democracy-proposal.service";
import {DemocracyReferendum} from "../../classes/democracy-referendum.class";
import {DemocracyReferendumService} from "../../services/democracy-referendum.service";

@Component({
  selector: 'app-democracy-referendum-list',
  templateUrl: './democracy-referendum-list.component.html',
  styleUrls: ['./democracy-referendum-list.component.scss']
})
export class DemocracyReferendumListComponent implements OnInit {

  public referenda: DocumentCollection<DemocracyReferendum>;
  currentPage = 1;

  constructor(
    private democracyReferendumService: DemocracyReferendumService
  ) {

  }

  ngOnInit() {
    this.getItems(this.currentPage);
  }

  getItems(page: number): void {

    const params = {
      page: { number: page, size: 25},
      remotefilter: {},
    };

    this.democracyReferendumService.all(params).subscribe(referenda => {
      this.referenda = referenda;
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
