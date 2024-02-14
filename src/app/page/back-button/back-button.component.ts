import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-back-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.sass']
})
export class BackButtonComponent {
  constructor(private _location: Location) {}
  navigateBack = () => {
    this._location.back()
  }
}
