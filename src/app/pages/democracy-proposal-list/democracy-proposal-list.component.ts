import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentCollection} from 'ngx-jsonapi';
import {DemocracyProposal} from '../../classes/democracy-proposal.class';
import {DemocracyProposalService} from '../../services/democracy-proposal.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-democracy-proposal-list',
  templateUrl: './democracy-proposal-list.component.html',
  styleUrls: ['./democracy-proposal-list.component.scss']
})
export class DemocracyProposalListComponent implements OnInit, OnDestroy {

  public proposals: DocumentCollection<DemocracyProposal>;
  currentPage = 1;

  private fragmentSubsription: Subscription;

  constructor(
    private democracyProposalService: DemocracyProposalService,
    private activatedRoute: ActivatedRoute
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

    this.democracyProposalService.all(params).subscribe(proposals => {
      this.proposals = proposals;
    });
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
    this.fragmentSubsription.unsubscribe();
  }
}
