import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileCardShowEventsComponent } from '../../mobile-card-show-events/mobile-card-show-events.component';

@Component({
  selector: 'app-admin-rejected-requests',
  standalone: true,
  imports: [CommonModule, MobileCardShowEventsComponent],
  templateUrl: './admin-rejected-requests.component.html',
  styleUrls: ['./admin-rejected-requests.component.sass']
})
export class AdminRejectedRequestsComponent {
  
}
