import { NgModule } from '@angular/core';




import {
  MatCardModule, 
  MatButtonModule,
  MatInputModule,
  MatTooltipModule,
  MatToolbarModule,
  MatIconModule,
  MatSelectModule,
  MatDatepickerModule,  
  MatTableModule,
  MatSnackBarModule,
  MatSortModule,
  MatMenuModule,  
  MatNativeDateModule
  
  } from '@angular/material';

  const modules = [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule,  
    MatDatepickerModule,    
    MatNativeDateModule,    
    MatSortModule,    
    MatMenuModule,
  MatToolbarModule, 
    ];

    @NgModule({
      imports: modules,
      exports: modules,
      })
      
export class MaterialModule { }
