import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ControllerHandlerService } from '../services/controller/controller-handler.service';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass'],
})
export class PageComponent implements OnInit {
  constructor(private _router: Router) {}
  ngOnInit(): void {
    if(!localStorage.getItem('venue_user_id') || !localStorage.getItem('venue_user_role')) {
      this._router.navigate(["./login"])
    }
    const role = localStorage.getItem('venue_user_role')
    switch(role) {
      case 'admin' : this._router.navigate(["./admin"]);
        break;
      case 'master' : this._router.navigate(["./master"]);
        break;
      case 'faculty' : this._router.navigate(["./faculty"]);
        break;
      default: localStorage.removeItem('venue_user_id');
            localStorage.removeItem('venue_user_role');
            this._router.navigate(["./login"]);
    }
  }
  
}
