import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterVenueFormComponent } from '../master-venue-form/master-venue-form.component';
import { ActivatedRoute} from '@angular/router';
import { VenueForm } from 'src/app/interfaces';
import { BackButtonComponent } from '../../back-button/back-button.component';

@Component({
  selector: 'app-master-list-venue-view',
  standalone: true,
  imports: [CommonModule, MasterVenueFormComponent, BackButtonComponent],
  templateUrl: './master-list-venue-view.component.html',
  styleUrls: ['./master-list-venue-view.component.sass']
})
export class MasterListVenueViewComponent {
  formData: VenueForm
  formDisabled = true
  formMode = 'view'

  constructor(private _router: ActivatedRoute) {
    // console.log("we are in ",this._router.snapshot.params);
    this.formData = {
      hallName: 'Marengo Hall',
      noOfMics: 3,
      noOfSeats: 300,
      noOfCollarMics: 2,
      noOfStandMics: 4,
      acAvailabilit: true,
      projectorAvailability: true,
      openingTime: "08:00",
      closingTime: "17:00"
    }
  }
}
