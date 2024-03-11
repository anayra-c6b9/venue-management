import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FacultyFormButtonComponent } from '../faculty-form-button/faculty-form-button.component';

@Component({
  selector: 'app-faculty-requirement-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './faculty-requirement-form.component.html',
  styleUrls: ['./faculty-requirement-form.component.sass']
})
export class FacultyRequirementFormComponent implements OnInit, OnChanges {
  // MIN_LEN = 10
  // MAX_LEN_SM = 60
  // MAX_LEN_MD = 200
  // MAX_LEN_LG = 600

  @Input() mode = "";

  @Input() completeFormData = {
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
  
  @Output() addEventEmitter = new EventEmitter()
  addEvent = () => {
    this.addEventEmitter.emit()
  }

  @Output() updateValidityEmitter = new EventEmitter()
  updateValidity = () => {
    this.updateValidityEmitter.emit(this.registerHallGroup.valid && this.registerFormGroup.valid)
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
        Validators.max(400),
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

  applyFormMode = (mode: string) => {
    switch(mode) {
      case "submit":
      case "add": this.registerFormGroup.disable();
                  this.registerHallGroup.enable();
                  break;
      case "view": this.registerFormGroup.disable();
                  this.registerHallGroup.disable();
                  break;
      case "edit": this.registerFormGroup.enable();
                  this.registerHallGroup.enable();
                  break;
      default: this.registerFormGroup.disable();
                this.registerHallGroup.disable();
    }
  }

  ngOnInit(): void {

    if(this.completeFormData.hallName !== "") {
      this.registerHallGroup.controls.hallName.setValue(this.completeFormData.hallName)
      this.registerFormGroup.controls.noOfSeats.setValue(this.completeFormData.noOfSeats)
      this.registerFormGroup.controls.noOfMics.setValue(this.completeFormData.noOfMics)
      this.registerFormGroup.controls.noOfStandMics.setValue(this.completeFormData.noOfStandMics)
      this.registerFormGroup.controls.noOfCollarMics.setValue(this.completeFormData.noOfCollarMics)
      this.registerFormGroup.controls.noOfLeatherChair.setValue(this.completeFormData.noOfLeatherChair)
      this.registerFormGroup.controls.noOfKhada.setValue(this.completeFormData.noOfKhada)
      this.registerFormGroup.controls.acRequirement.setValue(this.completeFormData.acRequirement)
      this.registerFormGroup.controls.laptopRequirement.setValue(this.completeFormData.laptopRequirement)
      this.registerFormGroup.controls.whiteBoardRequirement.setValue(this.completeFormData.whiteBoardRequirement)
      this.registerFormGroup.controls.lampRequirement.setValue(this.completeFormData.lampRequirement)
      this.registerFormGroup.controls.soundSystemRequirement.setValue(this.completeFormData.soundSystemRequirement)
      this.registerFormGroup.controls.projectorRequirement.setValue(this.completeFormData.projectorRequirement)
      this.registerFormGroup.controls.projectorSliderRequirement.setValue(this.completeFormData.projectorSliderRequirement)
    }
    this.applyFormMode(this.mode)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes?.['mode']) {
      this.applyFormMode(this.mode)
    }
  }
}
