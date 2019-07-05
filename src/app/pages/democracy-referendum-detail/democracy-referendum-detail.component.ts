import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {DemocracyReferendum} from '../../classes/democracy-referendum.class';
import {DemocracyReferendumService} from '../../services/democracy-referendum.service';

@Component({
  selector: 'app-democracy-referendum-detail',
  templateUrl: './democracy-referendum-detail.component.html',
  styleUrls: ['./democracy-referendum-detail.component.scss']
})
export class DemocracyReferendumDetailComponent implements OnInit {

  public referendum$: Observable<DemocracyReferendum>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private democracyReferendumService: DemocracyReferendumService
  ) { }

  ngOnInit() {
    this.referendum$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
          return this.democracyReferendumService.get(params.get('id'));
      })
    );
  }

}
