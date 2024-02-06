import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyCheckAvailabilityComponent } from './faculty-check-availability.component';

describe('FacultyCheckAvailabilityComponent', () => {
  let component: FacultyCheckAvailabilityComponent;
  let fixture: ComponentFixture<FacultyCheckAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacultyCheckAvailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyCheckAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
