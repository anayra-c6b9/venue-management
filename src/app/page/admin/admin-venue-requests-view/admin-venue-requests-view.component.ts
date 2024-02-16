import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from '../../back-button/back-button.component';
import { AdminButtonComponent } from '../admin-button/admin-button.component';
import { EventRequestDataComponent } from '../event-request-data/event-request-data.component';
import { EventRequirementDataComponent } from '../event-requirement-data/event-requirement-data.component';

@Component({
  selector: 'app-admin-venue-requests-view',
  standalone: true,
  imports: [CommonModule, BackButtonComponent, AdminButtonComponent, EventRequestDataComponent, EventRequirementDataComponent],
  templateUrl: './admin-venue-requests-view.component.html',
  styleUrls: ['./admin-venue-requests-view.component.sass']
})
export class AdminVenueRequestsViewComponent {
  mode="pending"

  acceptRequest = () => {
    console.log("request accepted");
  }

  rejectRequest = () => {
    console.log("request rejected");
  }
}
