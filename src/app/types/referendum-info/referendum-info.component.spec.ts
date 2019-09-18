import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferendumInfoComponent } from './referendum-info.component';

describe('ReferendumInfoComponent', () => {
  let component: ReferendumInfoComponent;
  let fixture: ComponentFixture<ReferendumInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferendumInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferendumInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
