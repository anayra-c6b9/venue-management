import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCardSecondTabComponent } from './main-card-second-tab.component';

describe('MainCardSecondTabComponent', () => {
  let component: MainCardSecondTabComponent;
  let fixture: ComponentFixture<MainCardSecondTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MainCardSecondTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCardSecondTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
