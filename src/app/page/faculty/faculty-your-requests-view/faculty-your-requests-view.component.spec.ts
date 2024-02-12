import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyYourRequestsViewComponent } from './faculty-your-requests-view.component';

describe('FacultyYourRequestsViewComponent', () => {
  let component: FacultyYourRequestsViewComponent;
  let fixture: ComponentFixture<FacultyYourRequestsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacultyYourRequestsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyYourRequestsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
