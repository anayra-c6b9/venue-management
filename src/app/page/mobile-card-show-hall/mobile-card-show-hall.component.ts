import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLinks } from 'src/app/interfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobile-card-show-hall',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mobile-card-show-hall.component.html',
  styleUrls: ['./mobile-card-show-hall.component.sass']
})
export class MobileCardShowHallComponent {
  @Input() hallInfo: CustomLinks = {
    id: 0,
    link: [''],
    name: ''
  }
}
