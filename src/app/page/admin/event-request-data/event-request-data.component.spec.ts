import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRequestDataComponent } from './event-request-data.component';

describe('EventRequestDataComponent', () => {
  let component: EventRequestDataComponent;
  let fixture: ComponentFixture<EventRequestDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EventRequestDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventRequestDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
