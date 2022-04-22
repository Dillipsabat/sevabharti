import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenfrequestlistComponent } from './benfrequestlist.component';

describe('BenfrequestlistComponent', () => {
  let component: BenfrequestlistComponent;
  let fixture: ComponentFixture<BenfrequestlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenfrequestlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenfrequestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
