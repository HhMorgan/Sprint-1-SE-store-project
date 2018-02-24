import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [ThemeModule, LoginRoutingModule],
  declarations: [LoginComponent],
  entryComponents: [],
  providers: []
})
export class LoginModule {}
