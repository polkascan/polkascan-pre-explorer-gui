import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuntimeTypeListComponent } from './runtime-type-list.component';

describe('RuntimeTypeListComponent', () => {
  let component: RuntimeTypeListComponent;
  let fixture: ComponentFixture<RuntimeTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuntimeTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuntimeTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
