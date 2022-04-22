import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodbanklistComponent } from './bloodbanklist.component';

describe('BloodbanklistComponent', () => {
  let component: BloodbanklistComponent;
  let fixture: ComponentFixture<BloodbanklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodbanklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodbanklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
