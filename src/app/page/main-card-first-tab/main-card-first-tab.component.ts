import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllerHandlerService } from 'src/app/services/controller/controller-handler.service';
import { Subscription } from 'rxjs';
import { AdminVenueRequestsComponent } from '../admin/admin-venue-requests/admin-venue-requests.component';
import { FacultyRegisterVenueComponent } from '../faculty/faculty-register-venue/faculty-register-venue.component';
import { MasterUpcomingEventsComponent } from '../master/master-upcoming-events/master-upcoming-events.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-card-first-tab',
  standalone: true,
  imports: [CommonModule,RouterModule,AdminVenueRequestsComponent, MasterUpcomingEventsComponent, FacultyRegisterVenueComponent],
  templateUrl: './main-card-first-tab.component.html',
  styleUrls: ['./main-card-first-tab.component.sass'],
  providers: [
    ControllerHandlerService
  ]
})
export class MainCardFirstTabComponent {
  private roleSubscription: Subscription;
  role = ""
  constructor(private controlHandler: ControllerHandlerService) {
    this.roleSubscription = this.controlHandler.role$.subscribe(res => {
      this.role = res
    })

    this.controlHandler.setRole("master")
  }
}
