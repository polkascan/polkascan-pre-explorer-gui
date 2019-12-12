import { Injectable } from '@angular/core';
import {Autoregister, Service} from 'ngx-jsonapi';
import {CouncilVote} from '../classes/council-vote.class';

@Injectable({
  providedIn: 'root'
})
@Autoregister()
export class CouncilVoteService extends Service<CouncilVote> {
  public resource = CouncilVote;
    public type = 'councilvote';
    public path = 'council/vote';
}
