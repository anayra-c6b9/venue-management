import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-faculty-register-venue',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './faculty-register-venue.component.html',
  styleUrls: ['./faculty-register-venue.component.sass']
})
export class FacultyRegisterVenueComponent {
  registerLink = ["./register/request-form"]
}
