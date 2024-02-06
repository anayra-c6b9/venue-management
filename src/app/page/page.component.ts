import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ControllerHandlerService } from '../services/controller/controller-handler.service';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass'],
})
export class PageComponent {
  constructor() {}
}
