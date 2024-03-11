import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCardComponent } from '../main-card/main-card.component';
import { CustomLinks } from 'src/app/interfaces';


@Component({
  selector: 'app-master',
  standalone: true,
  imports: [CommonModule, MainCardComponent],
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.sass']
})
export class MasterComponent {
  route_links: Array<CustomLinks>;

  constructor() {
    this.route_links = [
      {
        id: 1,
        link: ["./upcoming-events"],
        name: "Upcoming Events"
      },
      {
        id: 2,
        link: ["./list-venue"],
        name: "List Venue"
      },
      {
        id: 3,
        link: ["./add-venue"],
        name: "Add Venue"
      },
      // {
      //   id: 4,
      //   link: ["./dummy"],
      //   name: "Evaluate"
      // }
    ]
  }
}
