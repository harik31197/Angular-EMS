import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import {UserLogin} from '../data/login';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  value:string;
  empID:any;
pempID:any;

employeeid:any;
employeename:string;

empLogin: UserLogin =
{
  username:'',
  password:'',  
  granttype:'password',
  
}

errorStatus = false;
errorMessage = '';



  constructor(private router: Router,private loginservice:LoginService,private httpService:HttpClient) { }
  ngOnInit() {
    
    this.value = this.greetingText();
    
  }


  onHttpError(error: any) {
    console.log('error:', error);
    this.errorStatus = true;
    this.errorMessage = error.error.error;
    console.log(this.errorMessage);
  }

 /* onSubmit(form:NgForm)
  {
    this.authservice.login(this.empLogin).subscribe(
      data=>{
        this.tokenparams = data;
        this.authservice.AccessToken = this.tokenparams.access_token;
        this.router.navigate(['/bg']);
      }

    )
  }*/
  greetingText = () => {
    const now = moment()
    const currentHour = now.hour()
      if (currentHour >= 12 && currentHour <=17) return "Good Afternoon "
      else if (currentHour >= 18) return "Good Evening "
      else return "Good Morning "
  }
  onSubmit(form:NgForm)
  {   
      this.loginservice.inLoginPage(this.empLogin).subscribe(
      result=>{
      console.log(result);
      localStorage.setItem('token',result.access_token);      
      this.router.navigate(['/dashboard']);
    },
      error=>this.onHttpError(error)
    );

    this.loginservice.getEmpID(this.empLogin.username).subscribe(
      result=>{
        console.log(result);
        localStorage.setItem('empid',result);
        localStorage.setItem('empname',this.empLogin.username);
        
      }
    );

         
 
  }
  redirect()
  {
    this.router.navigate(['/forgotpassword']);
  }
    /*this.getLoginValues();
    console.log('login click works');

    if(this.loginPage.valid)
    {
      console.log("Valid!!!");
      this.loginservice.inLoginPage(this.employeeLogin).subscribe (
      result=>{
      localStorage.setItem('token',result);
      this.router.navigate(['/addemployee']);
    },
    error=>this.onHttpError(error))
     
    }
    else
    {
      this.errorStatus=true;
      this.errorMessage="Errors Encountered";
    }*/
  }  


    
  


