import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentviewprofileComponent } from './studentviewprofile.component';

describe('StudentviewprofileComponent', () => {
  let component: StudentviewprofileComponent;
  let fixture: ComponentFixture<StudentviewprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentviewprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentviewprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
