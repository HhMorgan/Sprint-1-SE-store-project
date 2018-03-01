import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterModule } from 'angular2-toaster';
import { StoreComponent } from './store.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    ToasterModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    StoreComponent,
  ],
})

export class StoreModule { }
