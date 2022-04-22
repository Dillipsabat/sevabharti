import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodbanksignupComponent } from './bloodbanksignup.component';

describe('BloodbanksignupComponent', () => {
  let component: BloodbanksignupComponent;
  let fixture: ComponentFixture<BloodbanksignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodbanksignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodbanksignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
