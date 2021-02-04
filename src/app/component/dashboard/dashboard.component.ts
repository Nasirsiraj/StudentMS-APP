import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() { }
  sidenavOpened = true;
  navLinkList = [
    'All Student',
    'Registration',
    'Search Student',
    'Find Result',
    'Notice Board',
    'Contact',
    'Help',
    'Share',
    'Settings'
  ];

  ngOnInit(): void {
  }
  toogleSidenav(): void{
    this.sidenavOpened = !this.sidenavOpened;
  }
}
