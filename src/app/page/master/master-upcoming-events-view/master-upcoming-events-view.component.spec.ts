import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterUpcomingEventsViewComponent } from './master-upcoming-events-view.component';

describe('MasterUpcomingEventsViewComponent', () => {
  let component: MasterUpcomingEventsViewComponent;
  let fixture: ComponentFixture<MasterUpcomingEventsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MasterUpcomingEventsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterUpcomingEventsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
