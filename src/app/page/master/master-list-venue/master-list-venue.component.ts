import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileCardShowHallComponent } from '../../mobile-card-show-hall/mobile-card-show-hall.component';

@Component({
  selector: 'app-master-list-venue',
  standalone: true,
  imports: [CommonModule, RouterModule, MobileCardShowHallComponent],
  templateUrl: './master-list-venue.component.html',
  styleUrls: ['./master-list-venue.component.sass']
})
export class MasterListVenueComponent {

}
