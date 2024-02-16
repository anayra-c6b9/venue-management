import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileCardShowEventsComponent } from '../../mobile-card-show-events/mobile-card-show-events.component';

@Component({
  selector: 'app-admin-upcoming-events',
  standalone: true,
  imports: [CommonModule, MobileCardShowEventsComponent],
  templateUrl: './admin-upcoming-events.component.html',
  styleUrls: ['./admin-upcoming-events.component.sass']
})
export class AdminUpcomingEventsComponent {

}
