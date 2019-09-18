import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderTypeComponent } from './render-type.component';

describe('RenderTypeComponent', () => {
  let component: RenderTypeComponent;
  let fixture: ComponentFixture<RenderTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
