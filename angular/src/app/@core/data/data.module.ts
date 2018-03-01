import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD

import { UserService } from './users.service';
import { ElectricityService } from './electricity.service';
import { StateService } from './state.service';
import { SmartTableService } from './smart-table.service';
import { PlayerService } from './player.service';

const SERVICES = [
  UserService,
  ElectricityService,
  StateService,
  SmartTableService,
  PlayerService,
=======
import { UserService } from './users.service';
import { StateService } from './state.service';
import { SmartTableService } from './smart-table.service';

const SERVICES = [
  UserService,
  StateService,
  SmartTableService,
>>>>>>> dev
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
