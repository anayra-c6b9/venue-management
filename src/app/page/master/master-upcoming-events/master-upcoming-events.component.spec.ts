import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterUpcomingEventsComponent } from './master-upcoming-events.component';

describe('MasterUpcomingEventsComponent', () => {
  let component: MasterUpcomingEventsComponent;
  let fixture: ComponentFixture<MasterUpcomingEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MasterUpcomingEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterUpcomingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
