import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { APIService } from '../../app_services/api.service';
import { APIData } from '../../app_services/models/api.data.structure'


@Component({
  selector: 'store',
  templateUrl: './template/store.component.html',
  styleUrls: ['./template/store.component.scss']
})

export class StoreComponent implements OnInit {

  ngOnInit() {
  }

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
      name: {
        title: 'Name',
        type: 'string',
      },
      price: {
        title: 'Price',
        type: 'number',
      },
      createdAt: {
        title: 'CreatedAt',
        type: 'string',
      },
      updatedAt: {
        title: 'UpdatedAt',
        type: 'string',
      },
      seller: {
        title: 'Seller',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private _apiService: APIService) {
    this._apiService.getProducts().subscribe((apiresponse: APIData)=>{
      this.source.load( apiresponse.data);
    });










    // const data = this.service.getProducts().subscribe;





    
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
