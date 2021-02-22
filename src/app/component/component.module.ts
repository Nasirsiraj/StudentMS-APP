import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {AppRoutingModule, RoutingComponent} from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddResultComponent } from './add-result/add-result.component';


@NgModule({
    declarations: [
      RoutingComponent,
      FooterComponent,
      AddResultComponent
    ],
    exports: [
      FooterComponent
    ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentModule { }
