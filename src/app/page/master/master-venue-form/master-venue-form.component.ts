import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MasterVenueFormButtonsComponent } from '../master-venue-form-buttons/master-venue-form-buttons.component';
import { VenueForm } from 'src/app/interfaces';

@Component({
  selector: 'app-master-venue-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MasterVenueFormButtonsComponent],
  templateUrl: './master-venue-form.component.html',
  styleUrls: ['./master-venue-form.component.sass']
})
export class MasterVenueFormComponent implements OnInit {
  @Input() mode = ""
  @Input() formDisabled = false
  @Input() formData: VenueForm = {
    hallName: '',
      noOfMics: 0,
      noOfSeats: 0,
      noOfCollarMics: 0,
      noOfStandMics: 0,
      acAvailabilit: false,
      projectorAvailability: false,
      openingTime: "",
      closingTime: ""
  }

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

  constructor(private _location: Location) {}

  ngOnInit(): void {
    if(this.mode !== 'add') {
      this.addVenueFormGroup.controls.hallName.setValue(this.formData.hallName)
      this.addVenueFormGroup.controls.noOfMics.setValue(this.formData.noOfMics.toString())
      this.addVenueFormGroup.controls.noOfSeats.setValue(this.formData.noOfSeats.toString())
      this.addVenueFormGroup.controls.noOfCollarMics.setValue(this.formData.noOfCollarMics.toString())
      this.addVenueFormGroup.controls.noOfStandMics.setValue(this.formData.noOfCollarMics.toString())
      this.addVenueFormGroup.controls.acAvailability.setValue(this.formData.acAvailabilit)
      this.addVenueFormGroup.controls.projectorAvailability.setValue(this.formData.projectorAvailability)
      this.addVenueFormGroup.controls.openingTime.setValue(this.formData.openingTime)
      this.addVenueFormGroup.controls.closingTime.setValue(this.formData.closingTime)
      this.addVenueFormGroup.disable()
    }
  }

  toggleEditMode = () => {
    console.log("toggling edit")
    if(this.addVenueFormGroup.disabled) {
      this.addVenueFormGroup.enable()
      this.mode = "edit"
    } else {
      this.addVenueFormGroup.disable()
      this.mode = "view"
    }
  }

  deleteVenue = () => {
    console.log("venue deleted")
  }

  patchVenue = () => {
    console.log("venue updated")
    // this._router.navigate(["./../list-venue"], {relativeToz})
    this._location.back()
  }

  print = () => {
    console.log(this.addVenueFormGroup.value)
  }
}
