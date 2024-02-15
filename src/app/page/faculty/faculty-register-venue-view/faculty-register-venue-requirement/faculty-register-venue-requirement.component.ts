import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyRequirementFormComponent } from '../../faculty-requirement-form/faculty-requirement-form.component';
import { FacultyFormButtonComponent } from '../../faculty-form-button/faculty-form-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-register-venue-requirement',
  standalone: true,
  imports: [CommonModule, FacultyRequirementFormComponent, FacultyFormButtonComponent],
  templateUrl: './faculty-register-venue-requirement.component.html',
  styleUrls: ['./faculty-register-venue-requirement.component.sass']
})
export class FacultyRegisterVenueRequirementComponent {
  formMode = "submit"
  formValidity = false

  constructor(private _router: Router) {}

  submitForm = () => {
    console.log("submitting")
    this._router.navigate(["/faculty/your-requests"])
  }

  updateValidity = (validity: boolean) => {
    this.formValidity = validity
  }
}
