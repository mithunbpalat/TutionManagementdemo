import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminclassscheduleComponent } from './adminclassschedule.component';

describe('AdminclassscheduleComponent', () => {
  let component: AdminclassscheduleComponent;
  let fixture: ComponentFixture<AdminclassscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminclassscheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminclassscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
