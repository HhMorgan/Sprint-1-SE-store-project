import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart.component';
import { CartTableComponent } from './cart-table/cart-table.component';

const routes: Routes = [{
  path: '',
  component: CartComponent,
  children: [{
    path: 'cart-table',
    component: CartTableComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule { }

export const routedComponents = [
  CartComponent,
  CartTableComponent,
];
