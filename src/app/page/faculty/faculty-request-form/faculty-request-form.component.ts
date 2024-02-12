import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, MaxLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { MasterVenueFormButtonsComponent } from '../../master/master-venue-form-buttons/master-venue-form-buttons.component';
import { FacultyFormButtonComponent } from '../faculty-form-button/faculty-form-button.component';

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

  @Input() mode = "";

  @Output() addEventEmitter = new EventEmitter()
  addEvent = () => {
    this.addEventEmitter.emit()
  }

  requestFormGroup = new FormGroup({
    eventTitle: new FormControl(
      "",
      [
        Validators.required,
        Validators.minLength(this.MIN_LEN),
        Validators.maxLength(this.MAX_LEN_SM)
      ]
    ),
    eventDescription: new FormControl(
      "",
      [
        Validators.required,
        Validators.minLength(this.MIN_LEN),
        Validators.maxLength(this.MAX_LEN_MD)
      ]
    ),
    eventObjective: new FormControl(
      "",
      [
        Validators.required,
        Validators.minLength(this.MIN_LEN),
        Validators.maxLength(this.MAX_LEN_LG)
      ]
    )
  })

  test = () => {
    console.log(this.requestFormGroup.controls)
  }

  ngOnInit(): void {
    document.querySelectorAll(".form-control").forEach(textarea => textarea.addEventListener("keydown", function(this: HTMLTextAreaElement) {
      this.style.overflow = 'hidden';
      this.style.height = '0';
      this.style.height = this.scrollHeight + 'px';
      this.style.paddingTop = "2rem"
    }))
  }
}
