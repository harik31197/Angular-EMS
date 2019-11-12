import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserLogin } from './data/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient) { }

  public inLoginPage(login:UserLogin)
  {
    const body = `username=${login.username}&password=${login.password}&grant_type=${login.granttype}`;
    return this.http.post('https://localhost:44374/token',body);
  }
  
}
