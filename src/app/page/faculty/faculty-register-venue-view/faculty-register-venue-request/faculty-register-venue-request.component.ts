import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyRequestFormComponent } from '../../faculty-request-form/faculty-request-form.component';
import { Router, RouterModule } from '@angular/router';
import { FacultyFormButtonComponent } from '../../faculty-form-button/faculty-form-button.component';

@Component({
  selector: 'app-faculty-register-venue-request',
  standalone: true,
  imports: [CommonModule, FacultyRequestFormComponent, FacultyFormButtonComponent, RouterModule],
  templateUrl: './faculty-register-venue-request.component.html',
  styleUrls: ['./faculty-register-venue-request.component.sass']
})
export class FacultyRegisterVenueRequestComponent {
  formMode="add"
  formValidity=false

  constructor(private _router: Router) {}

  registerFormRequest = () => {
    // post event and 
    console.log("Request registered")
    this._router.navigate(["faculty/register-venue/register/requirement-form"])
  }

  setForm = (validity: boolean) => {
    this.formValidity = validity
  }

  addForm = () => {
    console.log("adding")
    this._router.navigate(["/faculty/register-venue/register/requirement-form"])
  }
}
