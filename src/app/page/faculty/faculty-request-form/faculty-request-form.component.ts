import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { FacultyFormButtonComponent } from '../faculty-form-button/faculty-form-button.component';
import { CurrentDateValidator } from 'src/app/utils/validators/date-validator';
import { OlderDateValidator } from 'src/app/utils/validators/older-date-validator';
import { TrackById } from 'src/app/utils/trackbyid/trackById';
import { EventTimes, FacultyEventsCollection, FacultyVenueEvent } from 'src/app/interfaces';

@Component({
  selector: 'app-faculty-request-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FacultyFormButtonComponent],
  templateUrl: './faculty-request-form.component.html',
  styleUrls: ['./faculty-request-form.component.sass']
})
export class FacultyRequestFormComponent implements OnInit, OnChanges{
  MIN_LEN = 10
  MAX_LEN_SM = 60
  MAX_LEN_MD = 200
  MAX_LEN_LG = 600
  TIME_INPUT = 0;
  trackByVenue = TrackById

  @Input() mode = "";

  @Input() completeFormData = {
    eventTitle: "",
    startingDate: "",
    endingDate: "",
    noOfEventDay: 0,
    eventTime: []
  }

  @Input() eventCollection: FacultyEventsCollection = []

  @Output() addEventEmitter = new EventEmitter()
  addEvent = (value: FacultyVenueEvent) => {
    this.addEventEmitter.emit(value)
  } 

  @Output() updateFormValidity = new EventEmitter()
  updateForm = () => {
    this.updateFormValidity.emit(this.requestDateGroup.valid && this.requestEventGroup.valid);
    this.addEvent(this.updateFormValue());
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
    this.createTimeSlots()

    
    // const selectElement = document.getElementById('eventTitle')! as HTMLSelectElement;
    // console.log("selected Value ", selectElement.selectedIndex);

  }

  createTimeSlots = (dateData: Array<{startingTime: string, endingTime: string}> = []) => {
    // console.log("executing create time slots")
    // console.log(dateData)
    if(this.requestDateGroup.value.endingDate && this.requestDateGroup.value.startingDate){
      const startingDate = new Date(this.requestDateGroup.value.startingDate)
      const endingDate = new Date(this.requestDateGroup.value.endingDate)
      const noOfDates = Math.floor(endingDate.getTime() / (1000*60*60*24)) - Math.floor(startingDate.getTime() / (1000*60*60*24)) + 1
      if(noOfDates <= 0){
        this.TIME_INPUT = 0
        return
      } 
      for(let i = 0; i < noOfDates; i++) {
        this.requestTimeGroup.addControl("starting-time-"+i, new FormControl(dateData[i]?.startingTime || "", Validators.required))
        this.requestTimeGroup.addControl("ending-time-"+i, new FormControl(dateData[i]?.endingTime || "", [Validators.required, ]))
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

  applyFormMode = (mode: string) => {
    switch(mode) {
      case "view": this.requestEventGroup.disable()
                  this.requestDateGroup.disable()
                  this.requestTimeGroup.disable()
                  break;
      case "submit":
      case "add": this.requestDateGroup.disable()
                  this.requestEventGroup.enable()
                  this.requestTimeGroup.enable()
                  break;
      case "edit": this.requestDateGroup.enable()
                  this.requestTimeGroup.enable()
                  this.requestEventGroup.enable()
                  break;
      default: this.requestEventGroup.disable()
                this.requestDateGroup.disable()
                this.requestTimeGroup.disable()
    }
  }

  updateFormValue = () => {
    const selectElement = document.getElementById('eventTitle')! as HTMLSelectElement;
    const startingDate = this.requestDateGroup.value.startingDate || "";
    const endingDate = this.requestDateGroup.value.endingDate || "";
    const dateDifference = this.getDateDifference(startingDate, endingDate)

    const formInputs:FacultyVenueEvent = {
      eventName: this.eventCollection[selectElement.selectedIndex - 1].eventName,
      eventStartingDate: startingDate,
      eventEndingDate: endingDate,
      eventDuration: dateDifference,
      eventTimes: this.getEventTimes(startingDate, dateDifference),
      eventStatus: "pending",
      eventId: this.eventCollection[selectElement.selectedIndex - 1].id,
      facultyId: localStorage.getItem("venue_user_id")! as string
    }

    return formInputs;
  }

  // functions related to get Form Inputs

  getDateDifference = (date1str: string | null, date2str: string | null) => {
    if(date1str && date2str) {
      const date1 = new Date(date1str);
      const date2 = new Date(date2str);

      return (date2.getTime() - date1.getTime())/(24*60*60*1000) + 1;
    }

    return 0
  }

  getEventTimes = (startingDate: string | null, duration: Number) => {
    const collection: Array<EventTimes> = [];
    
    if(startingDate && duration){
      const initialDate = new Date(startingDate);
      const dateData: any = this.requestTimeGroup.value;

      for(let i = 0; i < +duration; i++){
        const startingTime = dateData[`starting-time-`+i];
        const endingTime = dateData[`ending-time-`+i];
        const date = new Date(initialDate.getTime() + 1000*60*60*24*i);
        const datePattern = date.getFullYear() + '-' + (((date.getMonth() + 1)/10) >= 1 ? date.getMonth() + 1 : '0'+(date.getMonth()+1)) + '-' + date.getDate();

        collection.push({
          date: datePattern,
          startingTime: startingTime,
          endingTime: endingTime
        })
      }  
    }

    return collection;
  }

  ngOnInit(): void {
    if(this.completeFormData.eventTitle !== ""){
      this.requestEventGroup.controls.eventTitle.setValue(this.completeFormData.eventTitle)
      this.requestDateGroup.controls.startingDate.setValue(this.completeFormData.startingDate)
      this.requestDateGroup.controls.endingDate.setValue(this.completeFormData.endingDate)
      this.TIME_INPUT = this.completeFormData.noOfEventDay
      this.createTimeSlots(this.completeFormData.eventTime)
    }

    this.applyFormMode(this.mode)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes?.['mode']) {
      this.applyFormMode(this.mode)
    }
  }

}
