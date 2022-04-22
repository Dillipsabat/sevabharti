import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilevalidationComponent } from './mobilevalidation.component';

describe('MobilevalidationComponent', () => {
  let component: MobilevalidationComponent;
  let fixture: ComponentFixture<MobilevalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilevalidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilevalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
