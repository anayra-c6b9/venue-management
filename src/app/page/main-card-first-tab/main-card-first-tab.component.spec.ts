import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCardFirstTabComponent } from './main-card-first-tab.component';

describe('MainCardFirstTabComponent', () => {
  let component: MainCardFirstTabComponent;
  let fixture: ComponentFixture<MainCardFirstTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MainCardFirstTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCardFirstTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
