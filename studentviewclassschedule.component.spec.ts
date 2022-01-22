import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentviewclassscheduleComponent } from './studentviewclassschedule.component';

describe('StudentviewclassscheduleComponent', () => {
  let component: StudentviewclassscheduleComponent;
  let fixture: ComponentFixture<StudentviewclassscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentviewclassscheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentviewclassscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
