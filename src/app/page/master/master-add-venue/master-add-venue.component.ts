import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from 'src/app/utils/test/test.pipe';
import { MasterVenueFormComponent } from '../master-venue-form/master-venue-form.component';

@Component({
  selector: 'app-master-add-venue',
  standalone: true,
  imports: [CommonModule, TestPipe, MasterVenueFormComponent],
  templateUrl: './master-add-venue.component.html',
  styleUrls: ['./master-add-venue.component.sass']
})
export class MasterAddVenueComponent {
  
}
