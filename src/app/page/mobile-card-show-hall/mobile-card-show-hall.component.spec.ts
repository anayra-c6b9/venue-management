import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCardShowHallComponent } from './mobile-card-show-hall.component';

describe('MobileCardShowHallComponent', () => {
  let component: MobileCardShowHallComponent;
  let fixture: ComponentFixture<MobileCardShowHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MobileCardShowHallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileCardShowHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
