import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {RuntimeStorage} from '../../classes/runtime-storage.class';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {RuntimeStorageService} from '../../services/runtime-storage.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-runtime-storage-detail',
  templateUrl: './runtime-storage-detail.component.html',
  styleUrls: ['./runtime-storage-detail.component.scss']
})
export class RuntimeStorageDetailComponent implements OnInit {

  runtimeStorage$: Observable<RuntimeStorage>;

  constructor(
    private route: ActivatedRoute,
    private runtimeStorageService: RuntimeStorageService
  ) { }

  ngOnInit() {
    this.runtimeStorage$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          if (params.get('id')) {
            return this.runtimeStorageService.get(params.get('id'));
          }
      })
    );
  }

}
