import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodbankpanelComponent } from './bloodbankpanel.component';

describe('BloodbankpanelComponent', () => {
  let component: BloodbankpanelComponent;
  let fixture: ComponentFixture<BloodbankpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodbankpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodbankpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
