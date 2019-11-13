import { NgModule } from '@angular/core';

import {
  MatCardModule, 
  MatButtonModule,
  MatInputModule,
  MatTooltipModule,
  MatToolbarModule
  } from '@angular/material';

  const modules = [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
  MatToolbarModule
    ];

    @NgModule({
      imports: modules,
      exports: modules,
      })
      
export class MaterialModule { }
