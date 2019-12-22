import { Injectable } from '@angular/core';
import {Service} from 'ngx-jsonapi';
import {TreasuryProposal} from '../classes/treasury-proposal.class';

@Injectable({
  providedIn: 'root'
})
export class TreasuryProposalService extends Service<TreasuryProposal> {
  public resource = TreasuryProposal;
  public type = 'treasuryproposal';
  public path = 'treasury/proposal';
}
