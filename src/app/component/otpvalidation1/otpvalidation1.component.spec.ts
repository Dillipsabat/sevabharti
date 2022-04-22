import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Otpvalidation1Component } from './otpvalidation1.component';

describe('Otpvalidation1Component', () => {
  let component: Otpvalidation1Component;
  let fixture: ComponentFixture<Otpvalidation1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Otpvalidation1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Otpvalidation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
