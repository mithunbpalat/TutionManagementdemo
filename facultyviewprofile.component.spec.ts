import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyviewprofileComponent } from './facultyviewprofile.component';

describe('FacultyviewprofileComponent', () => {
  let component: FacultyviewprofileComponent;
  let fixture: ComponentFixture<FacultyviewprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyviewprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyviewprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
