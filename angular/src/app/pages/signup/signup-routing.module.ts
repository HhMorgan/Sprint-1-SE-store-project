import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup.component';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
    children: [
      //  {
      //    path: 'signup',
      //    loadChildren: './signup/signup.module#SignUpModule'
      //  },
      //  {
      //    path: '',
      //    redirectTo: 'signup',
      //    pathMatch: 'full'
      //  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SignupRoutingModule {}
