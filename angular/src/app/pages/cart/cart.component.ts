import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { APIService } from '../../app_services/api.service';
import { APIData , ProductData , CartData } from '../../app_services/models/api.data.structure'


@Component({
  selector: 'cart',
  templateUrl: './template/cart.component.html',
  styleUrls: ['./template/cart.component.scss']
})

export class CartComponent implements OnInit {
  
  private userCart = <CartData>{};

  settings = {

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
      delete: false, //temp
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
      createdAt: {
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

    this.source.onRemoved().subscribe((productData :ProductData)=>{
      this._apiService.deleteProduct(productData).subscribe((apiresponse: APIData)=>{
        console.log(apiresponse);
      });
    });
   
  }

  ngOnInit() {
    this.userCart.username = localStorage.getItem("currentUser");
    console.log(this.userCart.username);
    if(this.userCart.username == null){
      //Show Message You are Not logged
    } else
    this.reloadData();
  }

  private reloadData(): void {
    this._apiService.getCartProducts(this.userCart).subscribe((apiresponse: APIData)=>{
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

  checkoutClick(event): void{
    if(this.userCart.username == null){
      //Show Message You are Not logged
    } else
      this._apiService.cartCheckout(this.userCart).subscribe((apiresponse: APIData)=>{
    });
  }
}
