import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UservalidationComponent } from './uservalidation.component';

describe('UservalidationComponent', () => {
  let component: UservalidationComponent;
  let fixture: ComponentFixture<UservalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UservalidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UservalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
