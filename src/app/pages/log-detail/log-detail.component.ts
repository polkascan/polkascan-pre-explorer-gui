import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Log} from "../../classes/log.class";
import {LogService} from "../../services/log.service";

@Component({
  selector: 'app-log-detail',
  templateUrl: './log-detail.component.html',
  styleUrls: ['./log-detail.component.scss']
})
export class LogDetailComponent implements OnInit {

  public log$: Observable<Log>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private logService: LogService
  ) { }

  ngOnInit() {
    this.log$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
          return this.logService.get(params.get('id'));
      })
    );
  }

}
