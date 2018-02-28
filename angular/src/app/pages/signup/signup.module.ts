import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';

import { SignupRoutingModule } from './signup-routing.module';

import { SignupComponent } from './signup.component';

@NgModule({
  imports: [ThemeModule, SignupRoutingModule],
  declarations: [SignupComponent],
  entryComponents: [],
  providers: []
})
export class SignupModule {}
