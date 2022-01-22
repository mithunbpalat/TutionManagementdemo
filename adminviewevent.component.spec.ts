import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminvieweventComponent } from './adminviewevent.component';

describe('AdminvieweventComponent', () => {
  let component: AdminvieweventComponent;
  let fixture: ComponentFixture<AdminvieweventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminvieweventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminvieweventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
