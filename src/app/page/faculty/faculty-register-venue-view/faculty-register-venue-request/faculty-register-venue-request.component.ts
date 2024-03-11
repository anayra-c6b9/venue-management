import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyRequestFormComponent } from '../../faculty-request-form/faculty-request-form.component';
import { Router, RouterModule } from '@angular/router';
import { FacultyFormButtonComponent } from '../../faculty-form-button/faculty-form-button.component';
import { FacultyService } from 'src/app/services/faculty/faculty.service';
import { FacultyVenueEvent } from 'src/app/interfaces';

@Component({
  selector: 'app-faculty-register-venue-request',
  standalone: true,
  imports: [CommonModule, FacultyRequestFormComponent, FacultyFormButtonComponent, RouterModule],
  templateUrl: './faculty-register-venue-request.component.html',
  styleUrls: ['./faculty-register-venue-request.component.sass']
})
export class FacultyRegisterVenueRequestComponent implements OnInit {
  formMode="add"
  formValidity=false
  eventCollection = []

  constructor(
    private _router: Router,
    private _facultyService: FacultyService
  ) {}
  
  ngOnInit(): void {
    const facultyId = localStorage.getItem('venue_user_id')! as string;
    console.log(facultyId)
    this._facultyService.getEventsApi(facultyId)
      .then((res: any) => {
        this.eventCollection = res;
      })
      .catch(err => {
        console.log(err)
      })
  }

  registerFormRequest = () => {
    // post event and 
    console.log("register Form Request")
    this._router.navigate(["faculty/register-venue/register/requirement-form"])
  }

  setForm = (validity: boolean) => {
    this.formValidity = validity
  }

  addForm = () => {
    console.log("added");
    
    this._router.navigate(["/faculty/register-venue/register/requirement-form"])
  }

}
