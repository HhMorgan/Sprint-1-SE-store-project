import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient , HttpHeaders  , HttpErrorResponse } from '@angular/common/http';

import { APIData , LoginData , ProductData,CartData} from './models/api.data.structure'


@Injectable()
export class APIService {
  private apiUrl = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) {}

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

  getProducts(): Observable<APIData> {
    return this.http.get<APIData>(this.apiUrl + 'product/getProducts').catch(this.errorHandler);
  }
  editProduct(productdata:ProductData):Observable<APIData>{
    return this.http.patch<ProductData>(this.apiUrl + '/product/updateProduct/'+productdata._id,productdata)
    .catch(this.errorHandler);
  }
  deleteProduct(productdata:ProductData):Observable<APIData>{
    return this.http.delete<ProductData>(this.apiUrl + '/product/deleteProduct/'+productdata._id)
    .catch(this.errorHandler);
  }
  createProduct(productdata: ProductData): Observable<APIData>{
    return this.http.post<ProductData>(this.apiUrl + 'product/createProduct', productdata).catch(this.errorHandler);
  }
  getCartProducts(): Observable<APIData> {
    return this.http.get<APIData>(this.apiUrl + 'cart/getProducts').catch(this.errorHandler);
  }
  deleteCartProduct(cartdata:CartData):Observable<APIData>{
    return this.http.delete<CartData>(this.apiUrl + 'cart/deleteProduct/'+cartdata._id)
    .catch(this.errorHandler);
  }
  createCartProduct(cartdata: CartData): Observable<APIData>{
    return this.http.post<CartData>(this.apiUrl + 'cart/createProduct', cartdata).catch(this.errorHandler);
  }
  createUser(loginData: LoginData): Observable<APIData> {
    return this.http.post<APIData>(this.apiUrl + 'user/create', loginData).catch(this.errorHandler);
  };
  login(loginData: LoginData): Observable<APIData> {
    return this.http.post<APIData>(this.apiUrl + 'auth/login', loginData).catch(this.errorHandler);
  }
}
