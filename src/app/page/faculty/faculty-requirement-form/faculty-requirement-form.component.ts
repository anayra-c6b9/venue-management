import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FacultyFormButtonComponent } from '../faculty-form-button/faculty-form-button.component';

@Component({
  selector: 'app-faculty-requirement-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FacultyFormButtonComponent],
  templateUrl: './faculty-requirement-form.component.html',
  styleUrls: ['./faculty-requirement-form.component.sass']
})
export class FacultyRequirementFormComponent implements OnInit {
  // MIN_LEN = 10
  // MAX_LEN_SM = 60
  // MAX_LEN_MD = 200
  // MAX_LEN_LG = 600

  @Input() mode = "";

  @Output() addEventEmitter = new EventEmitter()
  addEvent = () => {
    this.addEventEmitter.emit()
  }

  inputIsNumber = (control: AbstractControl): {isinteger: true} | null => {
    if (control.value === "" || control.value === null)
      return null
    return Number.isInteger(control.value) ? null : {isinteger: true};
  }

  registerHallGroup = new FormGroup({
    hallName: new FormControl(
      "",
      [
        Validators.required,
      ]
    ),
  })

  registerFormGroup = new FormGroup({
    noOfSeats: new FormControl(
      0,
      [
        Validators.required,
        Validators.min(0),
        Validators.max(4),
        this.inputIsNumber
      ]
    ),
    noOfMics: new FormControl(
      0,
      [
        Validators.required
      ]
    ),
    noOfStandMics: new FormControl(
      0,
      [
        Validators.required
      ]
    ),
    noOfCollarMics: new FormControl(
      0,
      [
        Validators.required
      ]
    ),
    noOfLeatherChair: new FormControl(
      0,
      [
        Validators.required
      ]
    ),
    noOfKhada: new FormControl(
      0,
      [
        Validators.required
      ]
    ),
    acRequirement: new FormControl(
      false,
      [
        Validators.required
      ]
    ),
    laptopRequirement: new FormControl(
      false,
      [
        Validators.required
      ]
    ),
    whiteBoardRequirement: new FormControl(
      false,
      [
        Validators.required
      ]
    ),
    lampRequirement: new FormControl(
      false,
      [
        Validators.required
      ]
    ),
    soundSystemRequirement: new FormControl(
      false,
      [
        Validators.required
      ]
    ),
    projectorRequirement: new FormControl(
      false,
      [
        Validators.required
      ]
    ),
    projectorSliderRequirement: new FormControl(
      false,
      [
        Validators.required
      ]
    ),
  })

  test = () => {
    console.log(this.registerFormGroup.controls)
  }

  refreshHallRequirements = () => {
    if(this.registerHallGroup.controls.hallName.value !== ""){
      this.registerFormGroup.enable()
    } else {
      this.registerFormGroup.disable()
    }
  }

  ngOnInit(): void {
    // document.querySelectorAll(".form-control").forEach(textarea => textarea.addEventListener("keydown", function(this: HTMLTextAreaElement) {
    //   this.style.overflow = 'hidden';
    //   this.style.height = '0';
    //   this.style.height = this.scrollHeight + 'px';
    //   this.style.paddingTop = "2rem"
    // }))
    this.registerFormGroup.disable()
  }
}
