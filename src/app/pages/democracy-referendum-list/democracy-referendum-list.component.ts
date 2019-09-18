import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentCollection} from 'ngx-jsonapi';
import {DemocracyProposalService} from '../../services/democracy-proposal.service';
import {DemocracyReferendum} from '../../classes/democracy-referendum.class';
import {DemocracyReferendumService} from '../../services/democracy-referendum.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-democracy-referendum-list',
  templateUrl: './democracy-referendum-list.component.html',
  styleUrls: ['./democracy-referendum-list.component.scss']
})
export class DemocracyReferendumListComponent implements OnInit, OnDestroy {

  public referenda: DocumentCollection<DemocracyReferendum>;
  public networkURLPrefix;
  currentPage = 1;

  private fragmentSubsription: Subscription;

  constructor(
    private democracyReferendumService: DemocracyReferendumService,
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

    this.democracyReferendumService.all(params).subscribe(referenda => {
      this.referenda = referenda;
    });
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
    this.fragmentSubsription.unsubscribe();
  }
}
