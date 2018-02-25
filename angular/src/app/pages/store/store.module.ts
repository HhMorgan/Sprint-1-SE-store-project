import { NgModule } from '@angular/core';
//import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { StoreRoutingModule,routedComponents } from './store-routing.module';
//import { SmartTableService } from '../../@core/data/smart-table.service';

@NgModule({
  imports: [
    ThemeModule,
    StoreRoutingModule,
    //Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    //SmartTableService,
  ],
})
export class StoreModule { }
