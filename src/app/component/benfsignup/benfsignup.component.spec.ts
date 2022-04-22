import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenfsignupComponent } from './benfsignup.component';

describe('BenfsignupComponent', () => {
  let component: BenfsignupComponent;
  let fixture: ComponentFixture<BenfsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenfsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenfsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
