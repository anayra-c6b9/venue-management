import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCardShowEventsComponent } from './mobile-card-show-events.component';

describe('MobileCardShowEventsComponent', () => {
  let component: MobileCardShowEventsComponent;
  let fixture: ComponentFixture<MobileCardShowEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MobileCardShowEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileCardShowEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
