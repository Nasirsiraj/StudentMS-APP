import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() { }
  sidenavOpened = true
  navLinkList = new Map([
    [1, {title: 'All Student', link: '/dashboard/'}],
    [2, {title: 'Registration', link: '/dashboard/registration'}],
    [3, {title: 'Search Student', link: '/dashboard'}],
    [4, {title: 'Find Result', link: '/dashboard'}],
    [5, {title: 'Notice Board', link: '/dashboard'}],
    [6, {title: 'Contact', link: '/dashboard/contact'}],
    [7, {title: 'Help', link: '/dashboard/help'}],
    [8, {title: 'Share', link: '/dashboard/share'}],
    [9, {title: 'Settings', link: '/dashboard/settings'}]
  ])

  ngOnInit(): void {
  }
  toogleSidenav(): void{
    this.sidenavOpened = !this.sidenavOpened
  }
}
