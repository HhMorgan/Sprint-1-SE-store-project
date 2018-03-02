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
        

        this.recent = [
          // {user: users.alan, type: 'home', time: '9:12 pm'},
          // {user: users.eva, type: 'home', time: '7:45 pm'},
          {user: users.AhmedAshraf},
          {user: users.AhmedAyman},
          {user: users.Aya2},
          {user: users.Habiba},
          {user: users.MahmmoudGamal},
          {user: users.MayarLotfy},
          {user: users.MohamedAdel},
          {user: users.Morgan},
          {user: users.Nada},
          {user: users.Sarah},
          {user: users.Tarek},
          {user: users.Youhanna},
          {user: users.Mariam},
          {user: users.Salma},
          {user: users.Shaker},
          {user: users.Hesham},
          {user: users.NourNounou},
        {user: users.OmarHany},
        {user: users.AhmedAlaa},
        {user: users.AhmedHany},
        {user: users.EbramIbrahim},
        {user: users.AbdulrahmanHosam},



          // {user: users.lee, type: 'mobile', time: '11:24 am'},
          // {user: users.jack, type: 'mobile', time: '10:45 am'},
          // {user: users.kate, type: 'work', time: '9:42 am'},
          // {user: users.kate, type: 'work', time: '9:31 am'},
          // {user: users.jack, type: 'mobile', time: '8:01 am'},
   ]})}

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
