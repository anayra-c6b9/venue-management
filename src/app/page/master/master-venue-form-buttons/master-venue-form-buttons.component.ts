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
  @Input() type: string = ""
  @Input() formIsValid: boolean = false


  isValid = () => {
    console.log("Submitted")
  }
}
