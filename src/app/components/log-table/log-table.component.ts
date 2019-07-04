import {Component, Input, OnInit} from '@angular/core';
import {Log} from "../../classes/log.class";

@Component({
  selector: 'app-log-table',
  templateUrl: './log-table.component.html',
  styleUrls: ['./log-table.component.scss']
})
export class LogTableComponent implements OnInit {

  @Input() log: Log = null;
  @Input() context: string = null;

  constructor() { }

  ngOnInit() {
  }

}
