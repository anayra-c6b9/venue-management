import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLinks } from 'src/app/interfaces';
import { MainCardComponent } from '../main-card/main-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [CommonModule, MainCardComponent],
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.sass']
})
export class FacultyComponent {
  route_links: Array<CustomLinks>;

  constructor() {
    this.route_links = [
      {
        id: 1,
        link: ["./register-venue"],
        name: "Register Venue"
      },
      {
        id: 2,
        link: ["./your-requests"],
        name: "Your Requests"
      },
      {
        id: 3,
        link: ["./check-availability"],
        name: "Check Availibility"
      }
    ]
  }
}
