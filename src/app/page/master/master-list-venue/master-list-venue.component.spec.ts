import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterListVenueComponent } from './master-list-venue.component';

describe('MasterListVenueComponent', () => {
  let component: MasterListVenueComponent;
  let fixture: ComponentFixture<MasterListVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MasterListVenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterListVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
