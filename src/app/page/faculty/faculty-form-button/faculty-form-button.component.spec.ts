import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyFormButtonComponent } from './faculty-form-button.component';

describe('FacultyFormButtonComponent', () => {
  let component: FacultyFormButtonComponent;
  let fixture: ComponentFixture<FacultyFormButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacultyFormButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyFormButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
