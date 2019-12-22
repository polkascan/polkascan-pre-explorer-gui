import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCommProposalListComponent } from './tech-comm-proposal-list.component';

describe('TechCommProposalListComponent', () => {
  let component: TechCommProposalListComponent;
  let fixture: ComponentFixture<TechCommProposalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechCommProposalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechCommProposalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
