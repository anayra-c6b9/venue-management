import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileCardShowEventsComponent } from '../../mobile-card-show-events/mobile-card-show-events.component';

@Component({
  selector: 'app-master-upcoming-events',
  standalone: true,
  imports: [CommonModule, RouterModule, MobileCardShowEventsComponent],
  templateUrl: './master-upcoming-events.component.html',
  styleUrls: ['./master-upcoming-events.component.sass']
})
export class MasterUpcomingEventsComponent {

}
