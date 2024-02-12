import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileCardShowHallComponent } from '../../mobile-card-show-hall/mobile-card-show-hall.component';
import { CustomLinks } from 'src/app/interfaces';

@Component({
  selector: 'app-master-list-venue',
  standalone: true,
  imports: [CommonModule, RouterModule, MobileCardShowHallComponent],
  templateUrl: './master-list-venue.component.html',
  styleUrls: ['./master-list-venue.component.sass']
})
export class MasterListVenueComponent {
  hallLinks: Array<CustomLinks>

  constructor() {
    this.hallLinks = [
      {
        id: 1,
        link: ['./test-hall'],
        name: 'Marengo Hall'
      },
      {
        id: 2,
        link: ['./test-hall'],
        name: 'Marengo Hall'
      },
      {
        id: 3,
        link: ['./test-hall'],
        name: 'Marengo Hall'
      },
    ]
  }
}
