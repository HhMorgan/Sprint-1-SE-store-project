import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { ThemeModule } from '../../@theme/theme.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [FormsModule , ThemeModule , LoginRoutingModule],
  declarations: [LoginComponent],
  entryComponents: [],
  providers: []
})

export class LoginModule {}
