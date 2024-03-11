import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { LoginInfo } from 'src/app/interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  loginUser = async (userDetails: LoginInfo) => {
    const login$ = this._http.post(environment.LOGIN_API, userDetails);

    return await lastValueFrom(login$);
  }

}
