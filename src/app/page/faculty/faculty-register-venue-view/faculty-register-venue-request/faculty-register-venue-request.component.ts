import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyRequestFormComponent } from '../../faculty-request-form/faculty-request-form.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-faculty-register-venue-request',
  standalone: true,
  imports: [CommonModule, FacultyRequestFormComponent, RouterModule],
  templateUrl: './faculty-register-venue-request.component.html',
  styleUrls: ['./faculty-register-venue-request.component.sass']
})
export class FacultyRegisterVenueRequestComponent {
  formMode="add"

  constructor(private _router: Router) {}

  registerFormRequest = () => {
    // post event and 
    console.log("Request registered")
    this._router.navigate(["faculty/register-venue/register/requirement-form"])
  }
}
