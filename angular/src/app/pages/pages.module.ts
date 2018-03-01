import { NgModule } from '@angular/core';
import { CartModule } from './cart/cart.module';
import { PagesComponent } from './pages.component';
import { StoreModule } from './store/store.module';
import { ThemeModule } from '../@theme/theme.module';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';


const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    DashboardModule,
    ThemeModule,
    StoreModule,
    CartModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
