import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { APIService } from '../../app_services/api.service';
import { APIData  , CartData } from '../../app_services/models/api.data.structure'


@Component({
  selector: 'cart',
  templateUrl: './template/cart.component.html',
  styleUrls: ['./template/cart.component.scss']
})

export class CartComponent implements OnInit {

  ngOnInit() {
  }

  settings = {
    // mode: 'external',
    editor: {
      config: false
    },
    
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      add: false,
      edit: false,
      // delete: false,
      columnTitle: 'Search'
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      price: {
        title: 'Price',
        type: 'number',
      },
      addedAt: {
        title: 'CreatedAt',
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

  source: LocalDataSource = new LocalDataSource();

   constructor(private _apiService: APIService) {
  //   this.source.onAdded().subscribe((productData :ProductData)=>{
  //     this._apiService.createProduct(productData).subscribe((apiresponse: APIData)=>{
  //       console.log(apiresponse);
  //     });
  //   });
  // this.source.onRemoved().subscribe((productData :ProductData)=>{
  //   this._apiService.deleteProduct(productData).subscribe((apiresponse: APIData)=>{
  //     console.log(apiresponse);
  //   });
  // });
    // this.source.onChanged().subscribe((productData :CartData)=>{
    //   // console.log(productData);
    // });
    this._apiService.getCartProducts().subscribe((apiresponse: APIData)=>{
     // const options = [];
      /*
      name: String;
    price: Number; 
    addedAt: String; 
    seller:  String;
      */
     
        for (var i = 0 ; i < apiresponse.data.length ; i++ ){
          apiresponse.data[i]._id = (i+1);
          console.log(apiresponse.data[i]);
          console.log(apiresponse.data[i]._id);
      
        }
      this.source.load( apiresponse.data);
      
     });
   }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  // OnRowSelect(event): void{
  //   // var productData :ProductData = event.data;
  //   // console.log(productData);
  // }
}
