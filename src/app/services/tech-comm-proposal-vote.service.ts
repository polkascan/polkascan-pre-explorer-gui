import { Injectable } from '@angular/core';
import {Autoregister, Service} from 'ngx-jsonapi';
import {TechCommProposalVote} from '../classes/tech-comm-proposal-vote.class';

@Injectable({
  providedIn: 'root'
})
@Autoregister()
export class TechCommProposalVoteService extends Service<TechCommProposalVote> {
  public resource = TechCommProposalVote;
  public type = 'techcommproposalvote';
  public path = 'techcomm/proposalvote';
}
