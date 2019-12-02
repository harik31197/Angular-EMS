import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpCont } from '../data/contacts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http:HttpClient) { }

  employees:any[];
  tempemployees:any=[];

  ngOnInit() {
   
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
