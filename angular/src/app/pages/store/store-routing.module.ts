import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store.component';
import { StoreTableComponent } from './store-table/store-table.component';

const routes: Routes = [{
  path: '',
  component: StoreComponent,
  children: [{
    path: 'store-table',
    component: StoreTableComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule { }

export const routedComponents = [
  StoreComponent,
  StoreTableComponent,
];
