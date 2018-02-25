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
  selector: 'ngx-signup-layout',
  styleUrls: ['./signup.layout.scss'],
  templateUrl: './signup.layout.html'
})
export class SignupLayoutComponent implements OnDestroy {

  constructor(
    protected themeService: NbThemeService,
    protected bpService: NbMediaBreakpointsService,
  ) {
    const isBp = this.bpService.getByName('is');
  }

  ngOnDestroy() {

  }
}
