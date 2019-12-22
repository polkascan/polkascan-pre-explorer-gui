import { Injectable } from '@angular/core';
import {Autoregister, Service} from 'ngx-jsonapi';
import {TechCommProposal} from '../classes/tech-comm-proposal.class';

@Injectable({
  providedIn: 'root'
})
@Autoregister()
export class TechCommProposalService extends Service<TechCommProposal> {
  public resource = TechCommProposal;
  public type = 'techcommproposal';
  public path = 'techcomm/proposal';
}
