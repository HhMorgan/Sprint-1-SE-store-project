import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';

const routes: Routes = [{
  path: '',
  component: StoreComponent,
  children: [ ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule { }

export const routedComponents = [
  StoreComponent,
];
