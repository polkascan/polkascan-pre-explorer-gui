import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCommProposalDetailComponent } from './tech-comm-proposal-detail.component';

describe('TechCommProposalDetailComponent', () => {
  let component: TechCommProposalDetailComponent;
  let fixture: ComponentFixture<TechCommProposalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechCommProposalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechCommProposalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
