import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyRegisterVenueRequestComponent } from './faculty-register-venue-request.component';

describe('FacultyRegisterVenueRequestComponent', () => {
  let component: FacultyRegisterVenueRequestComponent;
  let fixture: ComponentFixture<FacultyRegisterVenueRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacultyRegisterVenueRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyRegisterVenueRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
