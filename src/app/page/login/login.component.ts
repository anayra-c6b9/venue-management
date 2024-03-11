import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { LoginResponse } from 'src/app/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(
      "",
      [
        Validators.required,
        Validators.email,
      ]
    ),
    password: new FormControl(
      "",
      [
        Validators.required,
        Validators.minLength(8)
      ]
    )
  })

  constructor(
    private _loginApi: LoginService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    if(localStorage.getItem('venue_user_id') && localStorage.getItem('venue_user_role'))
      this._router.navigate(["./"])
  }

  login() {
    this._loginApi.loginUser({
      email: this.loginForm.value.email || "",
      password: this.loginForm.value.password || ""
    })
    .then((res) => {
      const response = res! as LoginResponse;
      localStorage.setItem('venue_user_id', response.facultyId);
      localStorage.setItem('venue_user_role', response.facultyRole)

      this._router.navigate(["./"])
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
