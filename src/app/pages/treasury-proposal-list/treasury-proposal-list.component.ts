import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentCollection} from 'ngx-jsonapi';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {TreasuryProposal} from '../../classes/treasury-proposal.class';
import {TreasuryProposalService} from '../../services/treasury-proposal.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-treasury-proposal-list',
  templateUrl: './treasury-proposal-list.component.html',
  styleUrls: ['./treasury-proposal-list.component.scss']
})
export class TreasuryProposalListComponent implements OnInit, OnDestroy {

  public proposals: DocumentCollection<TreasuryProposal>;

  public networkTokenDecimals: number;
  public networkTokenSymbol: string;
  public networkURLPrefix: string;

  currentPage = 1;

  private fragmentSubsription: Subscription;

  constructor(
    private treasuryProposalService: TreasuryProposalService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {

    this.networkTokenDecimals = environment.networkTokenDecimals;
    this.networkTokenSymbol = environment.networkTokenSymbol;

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

    this.treasuryProposalService.all(params).subscribe(proposals => {
      this.proposals = proposals;
    });
  }

  public formatBalance(balance: number) {
    return balance / Math.pow(10, this.networkTokenDecimals);
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
    this.fragmentSubsription.unsubscribe();
  }

}
