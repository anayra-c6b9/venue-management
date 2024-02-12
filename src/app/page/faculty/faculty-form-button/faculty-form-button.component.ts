import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faculty-form-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faculty-form-button.component.html',
  styleUrls: ['./faculty-form-button.component.sass']
})
export class FacultyFormButtonComponent {

  @Input() mode: string = ""
  @Input() formIsValid: boolean = false

  @Output() addFormEvent = new EventEmitter()
  addForm = () => {
    this.addFormEvent.emit()
  }

  @Output() cancelFormEvent = new EventEmitter()
  cancelForm = () => {
    this.cancelFormEvent.emit()
  }

  @Output() editAddedEvent = new EventEmitter()
  editAdded = () => {
    this.editAddedEvent.emit()
  }

  @Output() submitAddedEvent = new EventEmitter()
  submitAdded = () => {
    this.submitAddedEvent.emit()
  }

  @Output() toggleEditModeEvent = new EventEmitter()
  toggleEditMode = () => {
    this.toggleEditModeEvent.emit()
  }

  @Output() deleteVenueEvent = new EventEmitter()
  deleteVenue = () => {
    this.deleteVenueEvent.emit()
  }

  @Output() patchVenueEvent = new EventEmitter()
  patchVenue = () => {
    this.patchVenueEvent.emit()
  }

}
