import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { FacultyFormButtonComponent } from '../faculty-form-button/faculty-form-button.component';
import { CurrentDateValidator } from 'src/app/utils/validators/date-validator';
import { OlderDateValidator } from 'src/app/utils/validators/older-date-validator';

@Component({
  selector: 'app-faculty-request-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FacultyFormButtonComponent],
  templateUrl: './faculty-request-form.component.html',
  styleUrls: ['./faculty-request-form.component.sass']
})
export class FacultyRequestFormComponent implements OnInit{
  MIN_LEN = 10
  MAX_LEN_SM = 60
  MAX_LEN_MD = 200
  MAX_LEN_LG = 600
  TIME_INPUT = 0;

  @Input() mode = "";

  @Output() addEventEmitter = new EventEmitter()
  addEvent = () => {
    this.addEventEmitter.emit()
  }

  @Output() updateFormValidity = new EventEmitter()
  updateForm = () => {
    this.updateFormValidity.emit(this.requestDateGroup.valid && this.requestEventGroup.valid)
  }

    /*
  custom validators functions
  */
  dateComparison = (): ValidationErrors | null => {
    if(this.requestDateGroup?.value){
      return OlderDateValidator(this.requestDateGroup.value.startingDate || "", this.requestDateGroup.value.endingDate || "")
    }
      
    return null
  }

  requestEventGroup = new FormGroup({
    eventTitle: new FormControl(
      "",
      [
        Validators.required,
      ]
    ),
  })

  requestDateGroup = new FormGroup({
    startingDate: new FormControl(
      "",
      [
        Validators.required,
        CurrentDateValidator,
      ],
    ),
    endingDate: new FormControl(
      "",
      [
        Validators.required,
        CurrentDateValidator,
      ]
    )
  }, {
    validators: [
      this.dateComparison
    ]
  })

  requestTimeGroup = new FormGroup({})

  test = () => {
    console.log(this.requestEventGroup.controls)
  }

  // resize = function(this: HTMLAreaElement) {
  //   this.style.display = 'block';
  //   this.style.overflow = 'hidden';
  //   this.style.height = '0';
  //   this.style.height = this.scrollHeight + 'px';
  //   console.log('change')
  // }

  /*
  form changes functions
  */

  toggleTimeFormState = () => {
    this.requestEventGroup.valid ? this.requestDateGroup.enable() : this.requestDateGroup.disable()
  }

  generateTimeSlots = () => {
    if(!this.requestDateGroup.valid) {
      this.clearTimeGroupControls(this.TIME_INPUT)
      this.TIME_INPUT = 0
      return
    }
    if(this.requestDateGroup.value.endingDate && this.requestDateGroup.value.startingDate){
      const startingDate = new Date(this.requestDateGroup.value.startingDate)
      const endingDate = new Date(this.requestDateGroup.value.endingDate)
      const noOfDates = Math.floor(endingDate.getTime() / (1000*60*60*24)) - Math.floor(startingDate.getTime() / (1000*60*60*24)) + 1
      if(noOfDates <= 0){
        this.TIME_INPUT = 0
        return
      } 
      for(let i = 0; i < noOfDates; i++) {
        this.requestTimeGroup.addControl("starting-time-"+i, new FormControl("", Validators.required))
        this.requestTimeGroup.addControl("ending-time-"+i, new FormControl("", [Validators.required, ]))
      }
      this.TIME_INPUT = noOfDates
    } 
  }

  /* 
  time form building functions
  */

  showTimeGroupData = () =>{
    console.log(this.requestTimeGroup.controls)
  }

  clearTimeGroupControls = (n: number) => {
    for(let i = 0; i < n; i++) {
      this.requestTimeGroup.removeControl("starting-time-"+i)
      this.requestTimeGroup.removeControl("ending-time-"+i)
    }
  }

  createNewDate = (itDate: number): string => {
    if(!this.requestDateGroup.value.startingDate) return ""
  
    const startDate = new Date(this.requestDateGroup.value.startingDate)
    const newDate = new Date(startDate.getTime() + 1000*60*60*24*itDate)

    return `${newDate.getDate() < 10 ? "0"+newDate.getDate() : newDate.getDate()} ${newDate.toLocaleString('default', {month: 'short'})}, ${newDate.getFullYear()}`
  }

  ngOnInit(): void {
    // document.querySelectorAll(".form-control").forEach(textarea =>{
    //   textarea.addEventListener("keyup", this.resize)
    // })
   this.requestDateGroup.disable()
  
  }
}
