import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

import { UserService } from '../../../@core/data/users.service';

@Component({
  selector: 'ngx-contacts',
  styleUrls: ['./contacts.component.scss'],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnInit, OnDestroy {

  contacts: any[];
  recent: any[];
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;

  constructor(private userService: UserService,
              private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService) {

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ngOnInit() {

    this.userService.getUsers()
      .subscribe((users: any) => {
        this.contacts = [
//          {user: users.nick, type: 'mobile'},
          // {user: users.eva, type: 'home'},
          // {user: users.jack, type: 'mobile'},
          // {user: users.lee, type: 'mobile'},
          // {user: users.alan, type: 'home'},
          // {user: users.kate, type: 'work'},
        {user: users.AhmedAshraf, type: 'mobile'},
        {user: users.AhmedAyman, type: 'mobile'},
        {user: users.Aya2, type: 'mobile'},
        {user: users.Habiba, type: 'mobile'},
        {user: users.MahmmoudGamal, type: 'mobile'},
        ];

        this.recent = [
          // {user: users.alan, type: 'home', time: '9:12 pm'},
          // {user: users.eva, type: 'home', time: '7:45 pm'},
          {user: users.AhmedAshraf, type: 'mobile', time: '5:29 pm'},
          {user: users.AhmedAyman, type: 'mobile', time: '5:29 pm'},
          {user: users.Aya2, type: 'mobile', time: '5:29 pm'},
          {user: users.Habiba, type: 'mobile', time: '5:29 pm'},
          {user: users.MahmmoudGamal, type: 'mobile', time: '5:29 pm'},
          // {user: users.lee, type: 'mobile', time: '11:24 am'},
          // {user: users.jack, type: 'mobile', time: '10:45 am'},
          // {user: users.kate, type: 'work', time: '9:42 am'},
          // {user: users.kate, type: 'work', time: '9:31 am'},
          // {user: users.jack, type: 'mobile', time: '8:01 am'},
        ]}) 
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
