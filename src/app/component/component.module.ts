import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [DashboardComponent, ErrorPageComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentModule { }
