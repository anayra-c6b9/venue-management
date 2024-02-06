import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyRegisterVenueComponent } from './faculty-register-venue.component';

describe('FacultyRegisterVenueComponent', () => {
  let component: FacultyRegisterVenueComponent;
  let fixture: ComponentFixture<FacultyRegisterVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacultyRegisterVenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyRegisterVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
