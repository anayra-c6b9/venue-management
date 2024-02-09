import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterVenueFormButtonsComponent } from './master-venue-form-buttons.component';

describe('MasterVenueFormButtonsComponent', () => {
  let component: MasterVenueFormButtonsComponent;
  let fixture: ComponentFixture<MasterVenueFormButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MasterVenueFormButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterVenueFormButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
