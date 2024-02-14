import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueCheckAvailabilityViewComponent } from './venue-check-availability-view.component';

describe('VenueCheckAvailabilityViewComponent', () => {
  let component: VenueCheckAvailabilityViewComponent;
  let fixture: ComponentFixture<VenueCheckAvailabilityViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ VenueCheckAvailabilityViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenueCheckAvailabilityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
