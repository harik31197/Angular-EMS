import { Component, OnInit } from '@angular/core';
import {ForgotPassword} from '../data/forgotpassword'
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private loginservice:LoginService) { }

  empdata: ForgotPassword = 
  {
    email:'',
    empid:null
  };

  ngOnInit() {
  }
onSubmit(form:NgForm)
{
  this.loginservice.forgotPassword(this.empdata,this.empdata.empid).subscribe(
    result=>console.log('Email Sent'),
    error=>console.log('error')
  );
}
}
