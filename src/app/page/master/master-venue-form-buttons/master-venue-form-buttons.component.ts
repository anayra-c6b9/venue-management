import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master-venue-form-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './master-venue-form-buttons.component.html',
  styleUrls: ['./master-venue-form-buttons.component.sass']
})
export class MasterVenueFormButtonsComponent {
  @Input() mode: string = ""
  @Input() formIsValid: boolean = false

  @Output() addFormEvent = new EventEmitter()
  addForm = () => {
    this.addFormEvent.emit()
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
