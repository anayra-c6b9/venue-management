import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as $ from "jquery"
import { MobileCardShowEventsComponent } from '../mobile-card-show-events/mobile-card-show-events.component';

@Component({
  selector: 'app-venue-check-availability-view',
  standalone: true,
  imports: [CommonModule, MobileCardShowEventsComponent],
  templateUrl: './venue-check-availability-view.component.html',
  styleUrls: ['./venue-check-availability-view.component.sass']
})
export class VenueCheckAvailabilityViewComponent implements OnInit {

  ngOnInit(): void {
  // (<any>$('.datePicker')).datepicker()
  }
}
