import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllerHandlerService } from 'src/app/services/controller/controller-handler.service';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';
import { MainCardFirstTabComponent } from '../main-card-first-tab/main-card-first-tab.component';

export interface TabItem {
  id: Number,
  item: string
}

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [CommonModule, RouterModule, MainCardFirstTabComponent],
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.sass'],
  providers: [ControllerHandlerService]
})
export class MainCardComponent implements OnInit {
  controlHandlerSubscription: Subscription;
  role = "";

  tabs: Array<TabItem> = [
    {
      id: 1,
      item: 'Upcoming Events',
    }, {
      id: 2,
      item: 'List Venue'
    }, {
      id: 3,
      item: 'Add Venue'
    }
  ]

  trackbyfn = (index: Number, item: TabItem): Number => {
    return item.id
  }

  constructor(private controlHandler: ControllerHandlerService) {
    this.controlHandlerSubscription = this.controlHandler.role$.subscribe(res => {
      this.role = res
    })
    
    this.controlHandler.setRole("admin")
  }

  ngOnInit(): void {
    // console.log(this.role)
  }
}
