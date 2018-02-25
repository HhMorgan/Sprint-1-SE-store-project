import { Component, OnInit } from '@angular/core';

// import { MENU_ITEMS } from './dashboard-menu';

import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
 // menu: NbMenuItem[];

  ngOnInit() {
    // this.menu = MENU_ITEMS;
  }
}
