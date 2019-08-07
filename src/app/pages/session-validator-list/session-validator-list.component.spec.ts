import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionValidatorListComponent } from './session-validator-list.component';

describe('SessionValidatorListComponent', () => {
  let component: SessionValidatorListComponent;
  let fixture: ComponentFixture<SessionValidatorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionValidatorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionValidatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
