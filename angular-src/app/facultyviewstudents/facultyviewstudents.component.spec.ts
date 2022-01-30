import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyviewstudentsComponent } from './facultyviewstudents.component';

describe('FacultyviewstudentsComponent', () => {
  let component: FacultyviewstudentsComponent;
  let fixture: ComponentFixture<FacultyviewstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyviewstudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyviewstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
