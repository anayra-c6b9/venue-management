import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpcomingEventsViewComponent } from './admin-upcoming-events-view.component';

describe('AdminUpcomingEventsViewComponent', () => {
  let component: AdminUpcomingEventsViewComponent;
  let fixture: ComponentFixture<AdminUpcomingEventsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AdminUpcomingEventsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUpcomingEventsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
