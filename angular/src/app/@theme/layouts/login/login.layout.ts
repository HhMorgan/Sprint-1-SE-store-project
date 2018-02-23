import { Component, OnDestroy } from '@angular/core';
import {
  NbMediaBreakpoint,
  NbMediaBreakpointsService,
  NbThemeService
} from '@nebular/theme';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'ngx-login-layout',
  styleUrls: ['./login.layout.scss'],
  templateUrl: './login.layout.html'
})

export class LoginLayoutComponent implements OnDestroy {
  constructor(
    protected themeService: NbThemeService,
    protected bpService: NbMediaBreakpointsService,
  ) {
    const isBp = this.bpService.getByName('is');
  }

  ngOnDestroy() {
    
  }
}
