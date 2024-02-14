import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyRegisterVenueRequestComponent } from '../faculty-register-venue-view/faculty-register-venue-request/faculty-register-venue-request.component';
import { FacultyRegisterVenueRequirementComponent } from '../faculty-register-venue-view/faculty-register-venue-requirement/faculty-register-venue-requirement.component';
import { FacultyFormButtonComponent } from '../faculty-form-button/faculty-form-button.component';
import { FacultyRequestFormComponent } from '../faculty-request-form/faculty-request-form.component';
import { FacultyRequirementFormComponent } from '../faculty-requirement-form/faculty-requirement-form.component';

@Component({
  selector: 'app-faculty-your-requests-view',
  standalone: true,
  imports: [CommonModule, FacultyFormButtonComponent, FacultyRequestFormComponent, FacultyRequirementFormComponent],
  templateUrl: './faculty-your-requests-view.component.html',
  styleUrls: ['./faculty-your-requests-view.component.sass']
})
export class FacultyYourRequestsViewComponent {
  mode="view"
  formData = {}

  constructor() {
    this.formData = {
      eventTitle: "Art Classes by Ishan Awasthi",
      startingDate: "2024-02-15",
      endingDate: "2024-02-17"
    }
  }
}
