import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileCardShowEventsComponent } from '../../mobile-card-show-events/mobile-card-show-events.component';

@Component({
  selector: 'app-admin-venue-requests',
  standalone: true,
  imports: [CommonModule, MobileCardShowEventsComponent],
  templateUrl: './admin-venue-requests.component.html',
  styleUrls: ['./admin-venue-requests.component.sass']
})
export class AdminVenueRequestsComponent {

}
