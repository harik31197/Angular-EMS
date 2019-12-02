import { Injectable } from '@angular/core';
import { Observable,of} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient,HttpHeaders } from '@angular/common/http';
import {Headers,Http,HttpModule} from '@angular/http';
import {TokenParams} from './data/token';
import { UserLogin } from './data/login';
import { RequestOptions } from '@angular/http';





@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
AccessToken:string;
  constructor(private http:HttpClient) { }

 private TokenApi = 'https://localhost:44374/token';

 /*login(empLogin:UserLogin): Observable<TokenParams> {
  var head =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
   const body = `username=${empLogin.username}&password=${empLogin.password}&grant_type=${empLogin.granttype}`;
   return this,this.http.post(this.TokenApi,body,{ headers:head})
   .map(result=>result.json());

 }*/
}
