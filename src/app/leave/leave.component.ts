import { Component, OnInit } from '@angular/core';
import { Leave } from '../data/leave';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
import * as moment from 'moment';


/*export interface LeaveType
{
 key:string;
  value:number;
}
export interface SessionType
{
 key:string;
  value:number;
}*/
declare var require: any;
@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})


export class LeaveComponent implements OnInit {
 

  /*leaveTypes = [
   {viewValue:'Sick Leave',value:201},
   {viewValue:'Casual Leave',value:202},
   {viewValue:'Priviledge Leave',value:203},
  ];

  /*sessionType:Array<SessionType> = [
    {key:'Session 1', value:1},
    {key:'Session 2',value:2},
  ];*/
  minDate = new Date(2019, 1, 1);
  maxDate = new Date(2020, 10, 1);
  moment: any;

  constructor(private http: HttpClient, private snackbar: MatSnackBar, private router: Router, private route: ActivatedRoute, private httpservice: HttpClient, private loginservice: LoginService) { }

  isUser = localStorage.getItem('empid');
  days: any ;
  balance: number;
  leaveTypes = ['Sick Leave', 'Casual Leave', 'Priviledged Leave'];
  leaveIds = [201, 202, 203];
  sessions = [1, 2];
  emp_id = null;

  smessage: string = 'Leave Applied';
  actionButtonLabel: string = 'Close';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';



  applyLeave: Leave =
    {
      leave_type: '',
      from_date: new Date(),
      to_date: new Date(),
      from_session: null,
      to_session: null,
      leave_description: '',
      leave_type_type_id: null,
      Employee_emp_id: null,
      balance:0,
      apply_to: ''
    };

  status = false;

  errorStatus = false;
  errorMessage = '';

  errorTodate = false;
  errorMessageTodate = '';

  sickLeaveStatus = false;
  sickLeaveMessage = '';

  eligibleStatus = false;
  eligibleMessage = '';

  dateValidStatus = false;
  dateValidMessage = '';

  onHttpError(error: any) {
    console.log('error:', error);
    this.errorStatus = true;
    this.errorMessage = 'Could not apply Leave.Try again';
    console.log(this.errorMessage);
  }

  ngOnInit() {
    if (this.isUser == null) {
      this.router.navigate(['/404']);
    }

    /*this.leaveForm = this.formBuilder.group({
      from_date:['',Validators.required],
      toDate:['',Validators.required],
      fromSession:['',Validators.required],
      reason:['',Validators.required],
      status:['',Validators.required],
      submitdate:['',Validators.required],
      applyto:['',Validators.required]
    });*/
  }


  onApply(leaveform: NgForm) {

    this.assignLeaveID(this.applyLeave.leave_type);
    this.getBalance();
    console.log(this.balance+"b3eoo3ojocojch3c3");
    var datevalid = this.validateFromTo();
    if (datevalid) {
      this.dateValidStatus = true;
      this.dateValidMessage = "From Date cannot be after To date";
      console.log(this.dateValidMessage);
      //leaveform.resetForm();
    }
    else {
      this.dateValidStatus = false;
    }

    var sickValid = this.isSickLeaveValid(this.applyLeave.from_date, this.applyLeave.leave_type);
    if (sickValid) {
      this.sickLeaveStatus = true;
      this.sickLeaveMessage = "Sick Leave cannot be applied Post Dated";
     // leaveform.resetForm();
      console.log(this.sickLeaveStatus);
      console.log(this.sickLeaveMessage);
    }
    else {
      this.sickLeaveStatus = false;
    }
    this.noofDays(this.applyLeave);    //No of days
    console.log("Days " + this.days);

    console.log("Balance " + this.balance);
    var eligibility = this.isEligible();
    if (eligibility) {
      this.eligibleStatus = true;
      console.log('heloooooooo');
      this.eligibleMessage = "Insufficient Leaves";
    }
    else {
      this.eligibleStatus = false;
    }
    console.log("errorstatus"+this.errorStatus);
    this.applyLeave.balance=this.balance;

    if (leaveform.valid && !this.dateValidStatus && !this.sickLeaveStatus) {
      this.applyLeave.Employee_emp_id = parseInt(this.isUser);     
      console.log(this.applyLeave.leave_type_type_id)
      console.log(this.applyLeave.leave_type)
      console.log(this.applyLeave.from_date);
      console.log(this.applyLeave.to_date);
      this.loginservice.postLeaveForm(this.applyLeave).subscribe(
        result =>
          console.log('Leave Applied', result),
        error => this.onHttpError(error)
      );
      
      if (this.errorStatus == false)
       {
        let config = new MatSnackBarConfig();
        config.verticalPosition = this.verticalPosition;
        config.horizontalPosition = this.horizontalPosition;
        config.duration = this.setAutoHide ? this.autoHide : 0;
        this.snackbar.open(this.smessage, this.action ? this.actionButtonLabel : undefined, config);
      }
      leaveform.resetForm();

    }
  }
  onAppear() {
    this.status = true;
  }
  onReset() {
    this.status = false;
  }
  testing() {
    this.balance = 100;
    this.days = 120;
    console.log(this.balance);
  }
  assignLeaveID(type: string) {
    switch (type) {
      case 'Sick Leave': this.applyLeave.leave_type_type_id = 201;
        break;
      case 'Casual Leave': this.applyLeave.leave_type_type_id = 202;
        break;
      case 'Priviledged Leave': this.applyLeave.leave_type_type_id = 203;
        break;
    }
  }

  validateFromTo() {
    if (this.applyLeave.to_date.setHours(0, 0, 0, 0) < this.applyLeave.from_date.setHours(0, 0, 0, 0)) {
      return true;
    }
    else {
      return false;
    }

  }
  isSickLeaveValid(fromdate: Date, typeofleave: String) {
    var fulldate = moment(new Date(), 'YYYY-MM-DD');
    var datetoday = moment.parseZone(fulldate).format('YYYY-MM-DD');
    if ((typeofleave.localeCompare('Sick Leave') == 0) && (moment(fromdate).isAfter(datetoday))) {

      return true;
    }

    else {
      return false;
    }
  }
  refreshMessages() {
    this.sickLeaveStatus = false;

  }
  publicholidays() {
    var gandhiJayanthi = '02-10';
    var newYear = '01-01';
    var republicDay = '26-01';
    var tamilNewYear = '14-04';
    var mayDay = '01-05';
    var independanceDay = '15-08';
    var christmas = '25-12';
    this.moment.updateLocale('us', {
      holidays: [gandhiJayanthi, newYear, republicDay, tamilNewYear, mayDay, independanceDay, christmas],
      holidayFormat: 'DD-MM'
    });
  }

  noofDays(leaveApplied: Leave) {
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var diffdays = Math.abs((leaveApplied.from_date.getTime() - leaveApplied.to_date.getTime()) / (oneDay));
    this.days = diffdays;
  }

  getBalance() {
    console.log('hi');
    var eid = parseInt(this.isUser);
    console.log(eid);
    console.log(this.applyLeave.leave_type_type_id);
    this.loginservice.returnBalanceLeaves(this.applyLeave,eid).subscribe(result=> 
      this.balance = result
      );
      console.log(this.balance);

  }
  isEligible() {
    if (this.days > this.balance) {
      return true;
    }
    else {
      return false;
    }
  }

  /*
  var dateStatus = this.areDatesValid(this.applyLeave.from_date,this.applyLeave.to_date);
  if(dateStatus)
  {
    this.dateValidStatus=true;
    this.dateValidMessage='From Date cannot be after To Date';
  }
  else
  {
    this.dateValidStatus = false;
  }*/

  /* isSickLeaveValid(fromdate:Date,typeofleave:String)
{
  var fulldate = moment(new Date(), 'YYYY-MM-DD');
  var datetoday =moment.parseZone(fulldate).format('YYYY-MM-DD');
  if ((typeofleave.localeCompare('Sick Leave') == 0) && (moment(fromdate).isAfter(datetoday))) {
     
    return true;
  }

  else
   {
    return false;
  }
}
areDatesValid(fromdate:Date,todate:Date)
{
  if(moment(fromdate).isAfter(todate))
  {
    return true;

  }
  else
  {
    return false;
  }
}
noofDays(leaveApplied:Leave)
{
  var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  var diffdays=Math.abs((leaveApplied.from_date.getTime() - leaveApplied.to_date.getTime())/(oneDay));
  this.applyLeave.days = diffdays;
}
getBalance()
{
  var eid = parseInt(this.isUser);
  this.httpservice.get<any>('https://localhost:44374/api/leave/'+eid+this+this.leaveType.values)


}*/
}




