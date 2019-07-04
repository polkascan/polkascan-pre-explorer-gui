import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Session} from "../../classes/session.class";
import {SessionService} from "../../services/session.service";
import {SessionValidatorService} from "../../services/session-validator.service";

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.scss']
})
export class SessionDetailComponent implements OnInit {

  public session$: Observable<Session>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sessionService: SessionService,
    private sessionValidatorService: SessionValidatorService
  ) { }

  ngOnInit() {
    this.session$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
          return this.sessionService.get(params.get('id'), { include: ['validators'] });
      })
    );
  }

}
