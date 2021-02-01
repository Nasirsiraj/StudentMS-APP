import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {MaterialModule} from '../material/material.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentModule { }
