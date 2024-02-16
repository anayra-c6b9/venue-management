import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVenueRequestsViewComponent } from './admin-venue-requests-view.component';

describe('AdminVenueRequestsViewComponent', () => {
  let component: AdminVenueRequestsViewComponent;
  let fixture: ComponentFixture<AdminVenueRequestsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AdminVenueRequestsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminVenueRequestsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
