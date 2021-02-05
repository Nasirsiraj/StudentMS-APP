import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {AppRoutingModule, RoutingComponent} from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AllStudentComponent } from './all-student/all-student.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { FindResultComponent } from './find-result/find-result.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';


@NgModule({
    declarations: [
      RoutingComponent,
      FooterComponent,
      AllStudentComponent,
      SearchStudentComponent,
      FindResultComponent,
      NoticeBoardComponent,
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
