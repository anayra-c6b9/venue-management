import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCardThirdTabComponent } from './main-card-third-tab.component';

describe('MainCardThirdTabComponent', () => {
  let component: MainCardThirdTabComponent;
  let fixture: ComponentFixture<MainCardThirdTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MainCardThirdTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCardThirdTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
