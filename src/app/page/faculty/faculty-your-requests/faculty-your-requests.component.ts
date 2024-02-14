import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileCardShowEventsComponent } from '../../mobile-card-show-events/mobile-card-show-events.component';

@Component({
  selector: 'app-faculty-your-requests',
  standalone: true,
  imports: [CommonModule, MobileCardShowEventsComponent],
  templateUrl: './faculty-your-requests.component.html',
  styleUrls: ['./faculty-your-requests.component.sass']
})
export class FacultyYourRequestsComponent {

}
