import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllerHandlerService } from 'src/app/services/controller/controller-handler.service';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';
import { CustomLinks } from 'src/app/interfaces';

export interface TabItem {
  id: Number,
  item: string
}

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.sass'],
  providers: [ControllerHandlerService]
})
export class MainCardComponent implements OnInit {
  // controlHandlerSubscription: Subscription;

  @Input() tabs: Array<CustomLinks> = [] 

  trackbyfn = (index: Number, item: CustomLinks): Number => {
    return item.id
  }

  // constructor(private controlHandler: ControllerHandlerService) {
  // }

  ngOnInit(): void {
    // console.log(this.role)
  }
}
