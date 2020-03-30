import { Component, OnInit } from '@angular/core';
import {ForgotPassword} from '../data/forgotpassword'
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  smessage: string = 'Reset Link Sent';
  actionButtonLabel: string = 'Close';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'

  constructor(private loginservice:LoginService,public snackBar: MatSnackBar) { }

  empdata: ForgotPassword = 
  {
    email:'',
    emp_id:null
  };
  errorStatus=false;
  errorStatusMessage="";


  ngOnInit() {
  }
onSubmit(form:NgForm)
{
  console.log(this.empdata);  
  this.loginservice.forgotPassword(this.empdata).subscribe(
    result=>console.log('Email Sent',result),
    error=>this.onHttpError(error)
  );
  let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    this.snackBar.open(this.smessage, this.action ? this.actionButtonLabel : undefined, config);
    form.resetForm();
}
onHttpError(errorResponse:any)
  {
  console.log('error: ',errorResponse);
  this.errorStatus=true;
  this.errorStatusMessage=errorResponse.error.error;  
  }
}

