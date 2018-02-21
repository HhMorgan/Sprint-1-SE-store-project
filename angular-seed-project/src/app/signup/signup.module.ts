import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { signupRoutingModule } from './signup-routing.module';

import { signupComponent } from './signup.component';

@NgModule({
  imports: [ThemeModule, signupRoutingModule],
  declarations: [signupComponent],
  entryComponents: [],
  providers: []
})
export class signupModule {}
