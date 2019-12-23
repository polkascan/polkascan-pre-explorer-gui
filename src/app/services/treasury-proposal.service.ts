import { Injectable } from '@angular/core';
import {Autoregister, Service} from 'ngx-jsonapi';
import {TreasuryProposal} from '../classes/treasury-proposal.class';

@Injectable({
  providedIn: 'root'
})
@Autoregister()
export class TreasuryProposalService extends Service<TreasuryProposal> {
  public resource = TreasuryProposal;
  public type = 'treasuryproposal';
  public path = 'treasury/proposal';
}
