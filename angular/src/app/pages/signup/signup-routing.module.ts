import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from '../signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
    children: [
      // {
      //   path: 'items',
      //   loadChildren: './items/items.module#ItemsModule'
      // },
      // {
      //   path: '',
      //   redirectTo: 'items',
      //   pathMatch: 'full'
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SignupRoutingModule {}
