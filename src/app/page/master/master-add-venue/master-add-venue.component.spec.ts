import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAddVenueComponent } from './master-add-venue.component';

describe('MasterAddVenueComponent', () => {
  let component: MasterAddVenueComponent;
  let fixture: ComponentFixture<MasterAddVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MasterAddVenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterAddVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
