import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionValidatorDetailComponent } from './session-validator-detail.component';

describe('SessionValidatorDetailComponent', () => {
  let component: SessionValidatorDetailComponent;
  let fixture: ComponentFixture<SessionValidatorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionValidatorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionValidatorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
