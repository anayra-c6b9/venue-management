import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRequirementDataComponent } from './event-requirement-data.component';

describe('EventRequirementDataComponent', () => {
  let component: EventRequirementDataComponent;
  let fixture: ComponentFixture<EventRequirementDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EventRequirementDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventRequirementDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
