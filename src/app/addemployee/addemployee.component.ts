import { Component, OnInit } from '@angular/core';
import {Employee} from '../data/employee';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';

export interface Department
{
  value:string;
  viewValue:string;
}


export interface Blood
{
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  smessage: string = 'Employee Added';
  actionButtonLabel: string = 'Close';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'

  minDate = new Date(2015, 10, 1);
  maxDate = new Date(2020, 0, 1);

department:Department[] = [

  {value:'HR',viewValue:'HR'},
  {value:'Operations',viewValue:'Operations'},
  {value: 'Information Technology', viewValue:'Information Technology'},
  {value:'Business Development', viewValue:'Business Development'},
  {value:'Business Technology', viewValue:'Business Technology'},
  {value:'Ouality ANalyst', viewValue:'Quaity ANalyst'},
];

blood: Blood[] = [
  {value: 'A+ve', viewValue: 'A+ve'},
  {value: 'A-ve', viewValue: 'A-ve'},
  {value: 'B+ve', viewValue: 'B+ve'},
  {value: 'B-ve', viewValue: 'B-ve'},
  {value: 'O+ve', viewValue: 'O+ve'},
  {value: 'O-ve', viewValue: 'O-ve'},
  {value: 'AB+ve', viewValue: 'AB+ve'},
  {value: 'AB-ve', viewValue: 'AB-ve'},
];



  constructor(private loginservice:LoginService,public snackBar: MatSnackBar) { }

user:Employee = {

  emp_id:null,
  first_name:'',
  last_name:'',
  emp_email:'',
  emp_bloodgroup:'',
  emp_joiningdate:null,
  dob: null,
  emp_dept:'',
  emp_desig:'',
  username :'',
  emp_age:null,
};
errorStatus = false;
errorMessage = '';

  ngOnInit() {
  }

  onHttpError(error: any) {
    console.log('error:', error);
    this.errorStatus = true;
    this.errorMessage = error.error.error;
    console.log(this.errorMessage);
  }
  onSubmit(form:NgForm)
  {
    console.log(form.value);
    if(form.valid)
    {
      console.log(form.valid);
      this.loginservice.inRegisterEmployee(this.user).subscribe(
        result=>console.log('Employee Added',result),
        error=>this.onHttpError(error)
        );
        let config = new MatSnackBarConfig();
        config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    this.snackBar.open(this.smessage, this.action ? this.actionButtonLabel : undefined, config);

        form.resetForm();
    }
  }

  
}
