import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserService,
    private analyticsService: AnalyticsService ,private route: ActivatedRoute, private router: Router) {
}

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.hesham);
      let user: string = localStorage.getItem('currentUser');
    if(JSON.parse(user)=== "null"){
      document.getElementById("t1").innerHTML = "";
    }
    else{
      document.getElementById("t1").innerHTML =JSON.parse(localStorage.getItem('currentUser'));
    }
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
    console.log(localStorage.getItem('currentUser'));
    localStorage.setItem('currentUser',JSON.stringify('null'));
    localStorage.setItem('currentUser',JSON.stringify('null'));
    this.router.navigate(['dashboard'], { relativeTo: this.route });
    window.location.reload();
  }

  }
