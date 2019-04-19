import { Component, OnInit } from '@angular/core';
import {DocumentCollection, Service} from 'ngx-jsonapi';
import {ExtrinsicService} from '../../services/extrinsic.service';
import {Extrinsic} from '../../classes/extrinsic.class';

@Component({
  selector: 'app-extrinsic-list',
  templateUrl: './extrinsic-list.component.html',
  styleUrls: ['./extrinsic-list.component.scss']
})
export class ExtrinsicListComponent implements OnInit {

  public extrinsics: DocumentCollection<Extrinsic>;

  currentPage = 0;

  constructor(
    private extrinsicService: ExtrinsicService
  ) {

  }

  ngOnInit() {
    this.getExtrinsics(this.currentPage);
  }

  getExtrinsics(page: number): void {
    this.extrinsicService.all({
      page: { number: page, size: 25}
    }).subscribe(extrinsics => (this.extrinsics = extrinsics));
  }

  getNextExtrinsics(): void {
    this.currentPage += 1
    this.getExtrinsics(this.currentPage);
  }
}
