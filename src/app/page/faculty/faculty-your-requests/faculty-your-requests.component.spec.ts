import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyYourRequestsComponent } from './faculty-your-requests.component';

describe('FacultyYourRequestsComponent', () => {
  let component: FacultyYourRequestsComponent;
  let fixture: ComponentFixture<FacultyYourRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacultyYourRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyYourRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
