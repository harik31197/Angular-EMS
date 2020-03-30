import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpCont } from '../data/contacts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isAdmin = localStorage.getItem('empid');  
  name=localStorage.getItem('empname'); 
  
  constructor(private http:HttpClient,private router:Router) { }

  employees:any[];
  tempemployees:any=[];

  ngOnInit() {
    if(this.isAdmin==null)
    this.router.navigate(['/error']);
    var currentID = parseInt(this.isAdmin);
    
    console.log('inside onit()');
    this.http.get<EmpCont[]>('https://localhost:44374/api/getemployees').subscribe(  
      (result: any) => {
        (result.forEach(element => {
          this.tempemployees.push(element);
        }),
          error => console.log(error)
        )
      }
    );
    this.employees = this.tempemployees;
  }
  applyFilter(filterValue: any) {
    this.employees.filter = filterValue.trim().toLowerCase();
  }

}
