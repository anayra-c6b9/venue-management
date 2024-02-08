import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterListVenueViewComponent } from './master-list-venue-view.component';

describe('MasterListVenueViewComponent', () => {
  let component: MasterListVenueViewComponent;
  let fixture: ComponentFixture<MasterListVenueViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MasterListVenueViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterListVenueViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
