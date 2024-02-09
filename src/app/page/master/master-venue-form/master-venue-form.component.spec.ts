import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterVenueFormComponent } from './master-venue-form.component';

describe('MasterVenueFormComponent', () => {
  let component: MasterVenueFormComponent;
  let fixture: ComponentFixture<MasterVenueFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MasterVenueFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterVenueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
