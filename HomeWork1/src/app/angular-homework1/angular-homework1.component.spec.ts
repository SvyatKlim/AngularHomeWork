import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHomework1Component } from './angular-homework1.component';

describe('AngularHomework1Component', () => {
  let component: AngularHomework1Component;
  let fixture: ComponentFixture<AngularHomework1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularHomework1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularHomework1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
