import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentCollection} from 'ngx-jsonapi';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {TechCommProposal} from '../../classes/tech-comm-proposal.class';
import {TechCommProposalService} from '../../services/tech-comm-proposal.service';

@Component({
  selector: 'app-tech-comm-proposal-list',
  templateUrl: './tech-comm-proposal-list.component.html',
  styleUrls: ['./tech-comm-proposal-list.component.scss']
})
export class TechCommProposalListComponent implements OnInit, OnDestroy {

  public proposals: DocumentCollection<TechCommProposal>;
  public networkURLPrefix;
  currentPage = 1;

  private fragmentSubsription: Subscription;

  constructor(
    private techCommProposalService: TechCommProposalService,
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
      page: {number: page, size: 25},
      remotefilter: {},
    };

    this.techCommProposalService.all(params).subscribe(proposals => {
      this.proposals = proposals;
    });
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
    this.fragmentSubsription.unsubscribe();
  }
}
