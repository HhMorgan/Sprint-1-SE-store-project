import { Component } from '@angular/core';
import { APIService } from '../../app_services/api.service';
import { LocalDataSource } from 'ng2-smart-table';
import {APIData} from '../../app_services/models/api.data.structure'

@Component({
  selector: 'ngx-tables',
  template: `<router-outlet></router-outlet>`,
})
export class TablesComponent {
  src: LocalDataSource = new LocalDataSource();
  constructor(private _apiService: APIService) {
  this._apiService.getProducts().subscribe((apiresponse: APIData)=>{
    this.src.load( apiresponse.data);
  });
}
}
