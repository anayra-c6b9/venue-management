import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenueCheckAvailabilityViewComponent } from '../../venue-check-availability-view/venue-check-availability-view.component';

@Component({
  selector: 'app-faculty-check-availability',
  standalone: true,
  imports: [CommonModule, VenueCheckAvailabilityViewComponent],
  templateUrl: './faculty-check-availability.component.html',
  styleUrls: ['./faculty-check-availability.component.sass']
})
export class FacultyCheckAvailabilityComponent {
  
}
