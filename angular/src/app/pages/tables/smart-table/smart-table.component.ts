import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { APIService } from '../../app_services/api.service';
import { APIData } from '../../app_services/models/api.data.structure'

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      Name: {
        title: 'Name',
        type: 'string',
      },
      Price: {
        title: 'Price',
        type: 'number',
      },
      CreatedAt: {
        title: 'Created',
        type: 'date',
      },
      UpdatedAt: {
        title: 'Updated',
        type: 'date',
      },
      SellerName: {
        title: 'Seller Name',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();


/*  constructor(private _apiService: APIService) {
        this._apiService.getProducts().subscribe((apiresponse: APIData)=>{
        this.source.load( apiresponse.data);
     });*/

  constructor(private service: SmartTableService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  } 
}
