import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ControllerHandlerService } from 'src/app/services/controller/controller-handler.service';
import { FacultyYourRequestsComponent } from '../faculty/faculty-your-requests/faculty-your-requests.component';
import { MasterListVenueComponent } from '../master/master-list-venue/master-list-venue.component';
import { AdminRejectedRequestsComponent } from '../admin/admin-rejected-requests/admin-rejected-requests.component';

@Component({
  selector: 'app-main-card-second-tab',
  standalone: true,
  imports: [
    CommonModule,
    FacultyYourRequestsComponent,
    MasterListVenueComponent,
    AdminRejectedRequestsComponent
  ],
  templateUrl: './main-card-second-tab.component.html',
  styleUrls: ['./main-card-second-tab.component.sass'],
  providers: [ControllerHandlerService]
})
export class MainCardSecondTabComponent {
  private roleSubscription: Subscription;
  role = ""
  constructor(private controlHandler: ControllerHandlerService) {
    this.roleSubscription = this.controlHandler.role$.subscribe(res => {
      this.role = res
    })
  }
}
