import { NgModule } from '@angular/core';



import {
  MatCardModule, 
  MatButtonModule,
  MatInputModule,
  MatTooltipModule,
  MatToolbarModule,
  MatDatepickerModule,
  
  MatNativeDateModule
  
  } from '@angular/material';

  const modules = [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatDatepickerModule,
    
    MatNativeDateModule,
  MatToolbarModule, 
    ];

    @NgModule({
      imports: modules,
      exports: modules,
      })
      
export class MaterialModule { }
