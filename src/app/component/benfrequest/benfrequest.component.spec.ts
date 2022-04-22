import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenfrequestComponent } from './benfrequest.component';

describe('BenfrequestComponent', () => {
  let component: BenfrequestComponent;
  let fixture: ComponentFixture<BenfrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenfrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenfrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
