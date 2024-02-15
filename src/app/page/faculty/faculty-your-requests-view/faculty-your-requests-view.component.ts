import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyFormButtonComponent } from '../faculty-form-button/faculty-form-button.component';
import { FacultyRequestFormComponent } from '../faculty-request-form/faculty-request-form.component';
import { FacultyRequirementFormComponent } from '../faculty-requirement-form/faculty-requirement-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-your-requests-view',
  standalone: true,
  imports: [CommonModule, FacultyFormButtonComponent, FacultyRequestFormComponent, FacultyRequirementFormComponent],
  templateUrl: './faculty-your-requests-view.component.html',
  styleUrls: ['./faculty-your-requests-view.component.sass']
})
export class FacultyYourRequestsViewComponent implements OnInit {
  mode="view"
  requestFormData = {
    eventTitle: "",
    startingDate: "",
    endingDate: "",
    noOfEventDay: 0,
    eventTime: []
  }
  requirementFormData = {
    hallName: "",
    noOfSeats: 0,
    noOfMics: 0,
    noOfStandMics: 0,
    noOfCollarMics: 0,
    noOfLeatherChair: 0,
    noOfKhada: 0,
    acRequirement: false,
    laptopRequirement: false,
    whiteBoardRequirement: false,
    lampRequirement: false,
    soundSystemRequirement: false,
    projectorRequirement: false,
    projectorSliderRequirement: false
  }

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.requestFormData = this.assignRequestData()
    this.requirementFormData = this.assignRequirementData()
  }

  toggleFormMode = () => {
    if(this.mode === "view") {
      this.mode = "edit"
    } else {
      this.mode = "view"
    }
  }

  assignRequestData = (): any => {
    return {
      eventTitle: "Art Classes by Ishan Awasthi",
      startingDate: "2024-02-15",
      endingDate: "2024-02-17",
      noOfEventDay: 3,
      eventTime: [
        {
          startingTime: "09:00",
          endingTime: "14:00" 
        }, 
        {
          startingTime: "08:00",
          endingTime: "13:00"
        },
        {
          startingTime: "14:00",
          endingTime: "17:00"
        }
      ]
    }
  }

  assignRequirementData = (): any => {
    return {
      hallName: "Marengo Hall",
      noOfSeats: 2,
      noOfMics: 2,
      noOfStandMics: 4,
      noOfCollarMics: 1,
      noOfLeatherChair: 3,
      noOfKhada: 12,
      acRequirement: true,
      laptopRequirement: false,
      whiteBoardRequirement: true,
      lampRequirement: true,
      soundSystemRequirement: true,
      projectorRequirement: false,
      projectorSliderRequirement: false
    }
  }

  patchForm = () => {
    console.log("Form Patched")
    this._router.navigate(["../faculty/your-requests"])
  }
}
