import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from '../../back-button/back-button.component';
import { EventRequestDataComponent } from '../event-request-data/event-request-data.component';
import { EventRequirementDataComponent } from '../event-requirement-data/event-requirement-data.component';
import { AdminButtonComponent } from '../admin-button/admin-button.component';

@Component({
  selector: 'app-admin-upcoming-events-view',
  standalone: true,
  imports: [CommonModule, BackButtonComponent, EventRequestDataComponent, EventRequirementDataComponent, AdminButtonComponent],
  templateUrl: './admin-upcoming-events-view.component.html',
  styleUrls: ['./admin-upcoming-events-view.component.sass']
})
export class AdminUpcomingEventsViewComponent {
  mode = 'accept'

  rejectRequest = () => {
    console.log("rejected request")
  }

  pendingRequest = () => {
    console.log("moved to pending`")
  }
} 
