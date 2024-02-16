import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from '../../back-button/back-button.component';
import { EventRequestDataComponent } from '../event-request-data/event-request-data.component';
import { EventRequirementDataComponent } from '../event-requirement-data/event-requirement-data.component';
import { AdminButtonComponent } from '../admin-button/admin-button.component';

@Component({
  selector: 'app-admin-rejected-requests-view',
  standalone: true,
  imports: [CommonModule, BackButtonComponent, EventRequestDataComponent, EventRequirementDataComponent, AdminButtonComponent],
  templateUrl: './admin-rejected-requests-view.component.html',
  styleUrls: ['./admin-rejected-requests-view.component.sass']
})
export class AdminRejectedRequestsViewComponent {
  mode="reject"

  pendingRequest = () =>{
    console.log("request pending")
  }

  acceptRequest = () => {
    console.log("accept request")
  }
}
