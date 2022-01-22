import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyviewclassscheduleComponent } from './facultyviewclassschedule.component';

describe('FacultyviewclassscheduleComponent', () => {
  let component: FacultyviewclassscheduleComponent;
  let fixture: ComponentFixture<FacultyviewclassscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyviewclassscheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyviewclassscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
