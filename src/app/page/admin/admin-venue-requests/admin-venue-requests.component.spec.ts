import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVenueRequestsComponent } from './admin-venue-requests.component';

describe('AdminVenueRequestsComponent', () => {
  let component: AdminVenueRequestsComponent;
  let fixture: ComponentFixture<AdminVenueRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AdminVenueRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminVenueRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
