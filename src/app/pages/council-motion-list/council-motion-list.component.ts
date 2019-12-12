import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentCollection} from 'ngx-jsonapi';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {CouncilMotion} from '../../classes/council-motion.class';
import {CouncilMotionService} from '../../services/council-motion.service';

@Component({
  selector: 'app-council-motion-list',
  templateUrl: './council-motion-list.component.html',
  styleUrls: ['./council-motion-list.component.scss']
})
export class CouncilMotionListComponent implements OnInit, OnDestroy {

  public motions: DocumentCollection<CouncilMotion>;
  public networkURLPrefix;
  currentPage = 1;

  private fragmentSubsription: Subscription;

  constructor(
    private councilMotionService: CouncilMotionService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.fragmentSubsription = this.activatedRoute.fragment.subscribe(value => {
      if (+value > 0) {
        this.currentPage = +value;
      } else {
        this.currentPage = 1;
      }
      this.getItems(this.currentPage);
    });
  }

  getItems(page: number): void {

    const params = {
      page: {number: page, size: 25},
      remotefilter: {},
    };

    this.councilMotionService.all(params).subscribe(motions => {
      this.motions = motions;
    });
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
    this.fragmentSubsription.unsubscribe();
  }
}
