import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyRequirementFormComponent } from '../../faculty-requirement-form/faculty-requirement-form.component';
import { FacultyFormButtonComponent } from '../../faculty-form-button/faculty-form-button.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-faculty-register-venue-requirement',
  standalone: true,
  imports: [CommonModule, FacultyRequirementFormComponent, FacultyFormButtonComponent],
  templateUrl: './faculty-register-venue-requirement.component.html',
  styleUrls: ['./faculty-register-venue-requirement.component.sass']
})
export class FacultyRegisterVenueRequirementComponent implements OnInit {
  formMode = "submit"
  formValidity = false
  eventId = ""

  constructor(
    private _router: Router,
    private _activatedRouter: ActivatedRoute
  ) {}

  submitForm = () => {
    console.log("submitting")
    this._router.navigate(["/faculty/your-requests"])
  }

  updateValidity = (validity: boolean) => {
    this.formValidity = validity
  }

  ngOnInit(): void {
    if(this._activatedRouter.snapshot.queryParamMap.get('event') !== null && this._activatedRouter.snapshot.queryParamMap.get('event') !== "")
      this.eventId = this._activatedRouter.snapshot.queryParamMap.get('event')! as string
  }
}
