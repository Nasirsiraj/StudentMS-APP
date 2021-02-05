import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {ErrorPageComponent} from './component/error-page/error-page.component';
import {RegistrationComponent} from './component/registration/registration.component';
import {ContactComponent} from './component/contact/contact.component';
import {HelpComponent} from './component/help/help.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, children: [
      {path: '', redirectTo: 'registration', pathMatch: 'full'},
      {path: 'registration', component: RegistrationComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'help', component: HelpComponent},
      {path: '**', redirectTo: 'all-student'}
    ]},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  DashboardComponent,
  ErrorPageComponent,
  RegistrationComponent,
  ContactComponent,
  HelpComponent
];
