import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLinks } from 'src/app/interfaces';
import { MainCardComponent } from '../main-card/main-card.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, MainCardComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent {
  route_links: Array<CustomLinks>;

  constructor() {
    this.route_links = [
      {
        id: 1,
        link: ["./venue-requests"],
        name: "Venue Requests"
      },
      {
        id: 2,
        link: ["./upcoming-events"],
        name: "Upcoming Events"
      },
      {
        id: 3,
        link: ["./rejected-requests"],
        name: "Rejected Requests"
      }
    ]
  }
}
