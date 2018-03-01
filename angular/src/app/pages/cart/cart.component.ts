import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { APIService } from '../../app_services/api.service';
import { APIData } from '../../app_services/models/api.data.structure'
@Component({
  selector: 'ngx-tables',
  template: `<router-outlet></router-outlet>`,
})
export class CartComponent {
  source: LocalDataSource = new LocalDataSource();
  constructor(private _apiService: APIService) {
    this._apiService.getProducts().subscribe((apiresponse: APIData)=>{
      this.source.load( apiresponse.data);
    });
    };
}
