import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HttpClient,HttpHeaders } from '@angular/common/http';
import { UserLogin } from './data/login';
import { FormGroup } from '@angular/forms';
import { Observable,of} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Employee } from './data/employee';
import { Leave } from './data/leave';
import { VerifyEmployee } from './data/verifyemployee';
import { ForgotPassword } from './data/forgotpassword';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient, private route:ActivatedRoute) { }
  id:string;
  empid:number;

 inLoginPage(empLogin:UserLogin): Observable<any>
  {
    console.log('in InLoginPage()');
    const body = `username=${empLogin.username}&password=${empLogin.password}&grant_type=${empLogin.granttype}`;
    console.log(body);
    console.log(empLogin);
    return this.http.post('https://localhost:44374/token',body);
  }


  inRegisterEmployee(user:Employee):Observable<any>
  {
    console.log("Inside services");
    return this.http.post('https://localhost:44374/api/signup/addemployee',user);
  }

  getEmpID(userid:string):Observable<any>
  {
    console.log("To get ID");
    return this.http.get('https://localhost:44374/api/login/getid/'+userid);
  }

 postLeaveForm(applyLeave:Leave):Observable<any>
 {
   this.id=localStorage.getItem('empid');
   this.empid=parseInt(this.id);
   const body = `from_date=${applyLeave.from_date}&to_date=${applyLeave.to_date}&from_session=${applyLeave.from_session}&to_session=${applyLeave.to_session}&leave_description=${applyLeave.leave_description}&leave_typt_type_id=${applyLeave.leave_type_type_id}&apply_to=${applyLeave.apply_to}`;
   return this.http.post('https://localhost:44374/api/leave/'+this.empid,body);
 }

 verifyAccount(empInstance:VerifyEmployee,id:number)
 {
   return this.http.post('https://localhost:44374/api/signup/addemployee/VerifyAccount/'+id,empInstance);
 }
 forgotPassword(empdata:ForgotPassword,id:number)
 {
  return this.http.post('https://localhost:44374/api/forgotpassword/reset/'+id,empdata);
 }
  
}
