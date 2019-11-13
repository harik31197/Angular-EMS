import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule
  ]

})
export class LoginModule { }
