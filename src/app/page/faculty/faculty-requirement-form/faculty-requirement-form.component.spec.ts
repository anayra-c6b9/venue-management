import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyRequirementFormComponent } from './faculty-requirement-form.component';

describe('FacultyRequirementFormComponent', () => {
  let component: FacultyRequirementFormComponent;
  let fixture: ComponentFixture<FacultyRequirementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacultyRequirementFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyRequirementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
