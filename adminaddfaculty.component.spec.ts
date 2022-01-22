import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddfacultyComponent } from './adminaddfaculty.component';

describe('AdminaddfacultyComponent', () => {
  let component: AdminaddfacultyComponent;
  let fixture: ComponentFixture<AdminaddfacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddfacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
