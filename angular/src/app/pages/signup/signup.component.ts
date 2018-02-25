import { Component, OnInit } from '@angular/core';

// import { MENU_ITEMS } from './dashboard-menu';

import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';

@Component({
  selector: 'app-signup',
  styleUrls: ['./signup.component.scss'],
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
 // menu: NbMenuItem[];

  ngOnInit() {
    // this.menu = MENU_ITEMS;
  }
}
