import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  name;
  sign = 'SignUp';
  status = 'login';

  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.hesham);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
  
  logout(){
  //  console.log(localStorage.getItem('currentUser'));
   if((this.status == 'login' ) && (localStorage.getItem('currentUser') == null)){
     window.location.href="/#/pages/login";
     this.status='logout';
     this.name='Our store welcomes you';
    } else if( localStorage.getItem('currentUser') != null && this.status == 'logout'){
      this.status='login';
      localStorage.setItem('currentUser','null');
      // console.log(localStorage.getItem('currentuser') );
      this.name='';
    }
  }

  signup(){
    if(this.sign == 'SignUp'){
      window.location.href="/#/pages/signup";
      this.sign = 'login'
  } else if(this.sign == 'login'){
    window.location.href="/#/pages/login";
    this.sign = 'SignUp'
  }
}}
