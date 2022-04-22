import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uservalidation1Component } from './uservalidation1.component';

describe('Uservalidation1Component', () => {
  let component: Uservalidation1Component;
  let fixture: ComponentFixture<Uservalidation1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Uservalidation1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Uservalidation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
