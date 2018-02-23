import { NgModule } from '@angular/core';

import { ThemeModule } from '../@theme/theme.module';


import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';


import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';





@NgModule({
  imports: [ 
    FormsModule,
    ThemeModule,
    LoginRoutingModule],
  declarations: [ LoginComponent ],
  entryComponents: [],
  providers: []
})
export class LoginModule {}
