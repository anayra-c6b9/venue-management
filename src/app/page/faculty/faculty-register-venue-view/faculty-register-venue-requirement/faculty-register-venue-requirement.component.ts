import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyRequirementFormComponent } from '../../faculty-requirement-form/faculty-requirement-form.component';

@Component({
  selector: 'app-faculty-register-venue-requirement',
  standalone: true,
  imports: [CommonModule, FacultyRequirementFormComponent],
  templateUrl: './faculty-register-venue-requirement.component.html',
  styleUrls: ['./faculty-register-venue-requirement.component.sass']
})
export class FacultyRegisterVenueRequirementComponent {
  formMode = "submit"
}
