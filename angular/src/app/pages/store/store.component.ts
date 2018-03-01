import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { APIService } from '../../app_services/api.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { APIData  , ProductData } from '../../app_services/models/api.data.structure'

import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'store',
  templateUrl: './template/store.component.html',
  styleUrls: ['./template/store.component.scss']
})

export class StoreComponent implements OnInit {

  settings = {
    // mode: 'external',
    editor: {
      // config: false
    },
    add: {
      // inputClass: "ID",
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
    actions: {
      // add: false,
      // edit: false,
      // delete: false,
      columnTitle: 'Actions'
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false,
        addable: false,
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
        editable: false,
        addable: false,
      },
      updatedAt: {
        title: 'UpdatedAt',
        type: 'string',
        editable: false,
        addable: false,
      },
      seller: {
        title: 'Seller',
        type: 'string',
        editable: false,
        addable: false,
      },
    },
  };

  config: ToasterConfig;
  source: LocalDataSource = new LocalDataSource();

  constructor(private _apiService: APIService , private toasterService: ToasterService) {
    this.source.onChanged().subscribe(()=>{
      // this.fetchData();
    });
    this.source.onAdded().subscribe((productData :ProductData)=>{
      this._apiService.createProduct(productData).subscribe((apiresponse: APIData)=>{
        this.showToast( 'default' , 'Message', apiresponse.msg.toString());
        this.reloadData();
      });
    });

    this.source.onUpdated().subscribe((productData :ProductData)=>{
      this._apiService.updateProduct(productData).subscribe((apiresponse: APIData)=>{
        this.showToast( 'default' , 'Message', apiresponse.msg.toString());
        this.reloadData();
      });
    });

    this.source.onRemoved().subscribe((productData :ProductData)=>{
      this._apiService.deleteProduct(productData).subscribe((apiresponse: APIData)=>{
        this.showToast( 'default' , 'Message', apiresponse.msg.toString());
        this.reloadData();
      });
    });
  }

  types: string[] = ['default', 'info', 'success', 'warning', 'error'];
  animations: string[] = ['fade', 'flyLeft', 'flyRight', 'slideDown', 'slideUp'];
  positions: string[] = ['toast-top-full-width', 'toast-bottom-full-width', 'toast-top-left', 'toast-top-center',
    'toast-top-right', 'toast-bottom-right', 'toast-bottom-center', 'toast-bottom-left', 'toast-center'];

  private showToast(type: string, title: string, body: string) {
    this.showToastConfig( type , title , body , 'toast-top-right' , 'fade' , 5000 , 5 , true , true , false , true );
  }

  private showToastConfig(type: string , title: string , body: string , position: string , animationType: string , timeout: number , toastsLimit: number , 
    isNewestOnTop: boolean , isHideOnClick: boolean , isDuplicatesPrevented: boolean , isCloseButton: boolean ){
      this.config = new ToasterConfig({positionClass: position , timeout: timeout , newestOnTop: isNewestOnTop ,
        tapToDismiss: isHideOnClick , preventDuplicates: isDuplicatesPrevented , animation: animationType , limit: toastsLimit,
      });
      var toast: Toast = { type: type , title: title , body: body , timeout: timeout , showCloseButton: isCloseButton , 
        bodyOutputType: BodyOutputType.TrustedHtml };
      this.toasterService.popAsync(toast);
  }

  ngOnInit() {
    this.reloadData();
  }

  private reloadData(): void {
    this._apiService.getProducts().subscribe((apiresponse: APIData)=>{
      for (var i = 0 ; i < apiresponse.data.length ; i++ )
        apiresponse.data[i].id = (i+1);
      this.source.load(apiresponse.data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  OnRowSelect(event): void {
    var productData :ProductData = event.data;
    // console.log(productData);
  }
}
