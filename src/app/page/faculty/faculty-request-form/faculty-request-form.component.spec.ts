import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyRequestFormComponent } from './faculty-request-form.component';

describe('FacultyRequestFormComponent', () => {
  let component: FacultyRequestFormComponent;
  let fixture: ComponentFixture<FacultyRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacultyRequestFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
