import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  },{
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  }, {
    path: 'signup',
    loadChildren: './signup/signup.module#SignupModule',
  }, {
    path: 'store',
    component: StoreComponent
}, {
  path: 'cart',
  component: CartComponent
},
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
