import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { APIService } from '../../app_services/api.service';
import { APIData  , ProductData  , CartData } from '../../app_services/models/api.data.structure'


@Component({
  selector: 'store',
  templateUrl: './template/store.component.html',
  styleUrls: ['./template/store.component.scss']
})

export class StoreComponent implements OnInit {


  private cart: String;
  private productData :ProductData;

  ngOnInit() {
    
  }

  settings = {
    // mode: 'external',
    editor: {
      config: false
    },
    cart:{
      
    },
    add: {
      inputClass: "ID",
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
      //add: false,
     //edit: false,
      // delete: false,
      columnTitle: 'Search'
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

  source: LocalDataSource = new LocalDataSource();

  constructor(private _apiService: APIService) {
    this.source.onAdded().subscribe((productData :ProductData)=>{
      this._apiService.createProduct(productData).subscribe((apiresponse: APIData)=>{
        console.log(apiresponse);
      });
    });
   
    this.source.onRemoved().subscribe((productData :ProductData)=>{
      this._apiService.deleteProduct(productData).subscribe((apiresponse: APIData)=>{
        console.log(apiresponse);
      });
    });
    this.source.onUpdated().subscribe((productData :ProductData)=>{
      this._apiService.editProduct(productData).subscribe((apiresponse: APIData)=>{
        console.log(apiresponse);
      });
    });
    this._apiService.getProducts().subscribe((apiresponse: APIData)=>{
      for (var i = 0 ; i < apiresponse.data.length ; i++ )
        apiresponse.data[i].id = (i+1);
      
      console.log(apiresponse.data[0]);
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

  OnRowSelect(event): void{
     this.productData = event.data;
     if(this.cart == this.productData._id){
       this.cart="-1";
     }
     else if(this.cart != this.productData._id || this.cart=="-1"){
      this.cart=this.productData._id;
     }
     
     console.log( this.productData);
     
    //  console.log(productData);
  }

  cartClick(event):void{


    if(this.cart != "-1"){
      var cardData:CartData;
      //Add toast with msg Added To Cart
      cardData._id = this.productData._id;
      cardData.username = localStorage.getItem("currentUser");
      
      this._apiService.addCartProduct(cardData).subscribe((apiresponse: APIData)=>{
        console.log(apiresponse);
      });
    }
    else{

      //Add Toast with msg Select a Product first
      console.log("Nothing is selected");
    }

   
  }
}
