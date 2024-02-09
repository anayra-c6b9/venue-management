import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MasterVenueFormButtonsComponent } from '../master-venue-form-buttons/master-venue-form-buttons.component';

@Component({
  selector: 'app-master-venue-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MasterVenueFormButtonsComponent],
  templateUrl: './master-venue-form.component.html',
  styleUrls: ['./master-venue-form.component.sass']
})
export class MasterVenueFormComponent {
  type = "add"

  addVenueFormGroup = new FormGroup({
    hallName: new FormControl(
      "",
      {
        validators: [
          Validators.required,
          Validators.minLength(2),
        ],
        updateOn: 'blur'
      },
    ),
    noOfSeats: new FormControl(
      "",
      {
        validators: [
          Validators.required,
          Validators.min(1)
        ],
        updateOn: 'blur'
      }
    ),
    noOfMics: new FormControl(
      "",
      {
        validators: [
          Validators.required,
          Validators.min(1)
        ],
        updateOn: 'blur'
      }
    ),
    noOfCollarMics: new FormControl(
      "",
      {
        validators: [
          Validators.required,
          Validators.min(0)
        ],
        updateOn: 'blur'
      }
    ),
    noOfStandMics: new FormControl(
      "",
      {
        validators: [
          Validators.required,
          Validators.min(0)
        ],
        updateOn: 'blur'
      }
    ),
    noOfWhiteBoards: new FormControl(
      "",
      {
        validators: [
          Validators.required,
          Validators.min(0)
        ],
        updateOn: 'blur'
      }
    ),
    acAvailability: new FormControl(false,
      [
        Validators.required
      ]  
    ),
    projectorAvailability: new FormControl(
      false,
      [
        Validators.required
      ]
    ),
    openingTime: new FormControl(
      "",
      {
        validators: [
          Validators.required,
        ],
        updateOn: 'blur'
      } 
    ),
    closingTime: new FormControl(
      "",
      {
        validators: [
          Validators.required
        ],
        updateOn: 'blur'
      }
    )
  })

  print = () => {
    console.log(this.addVenueFormGroup.value)
  }
}
