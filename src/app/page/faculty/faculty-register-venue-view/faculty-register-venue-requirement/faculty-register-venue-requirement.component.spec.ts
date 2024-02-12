import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyRegisterVenueRequirementComponent } from './faculty-register-venue-requirement.component';

describe('FacultyRegisterVenueRequirementComponent', () => {
  let component: FacultyRegisterVenueRequirementComponent;
  let fixture: ComponentFixture<FacultyRegisterVenueRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacultyRegisterVenueRequirementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyRegisterVenueRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
