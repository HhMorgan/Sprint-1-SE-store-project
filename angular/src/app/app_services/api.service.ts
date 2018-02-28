import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient , HttpHeaders  , HttpErrorResponse } from '@angular/common/http';

import { APIData , LoginData  , ProductData } from './models/api.data.structure';


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


  createUser(loginData: LoginData): Observable<APIData> {
    return this.http.post<APIData>(this.apiUrl + 'user/create', loginData).catch(this.errorHandler);
  };



  login(loginData: LoginData): Observable<APIData> {
    return this.http.post<APIData>(this.apiUrl + 'auth/login', loginData).catch(this.errorHandler);
  }

  createProduct(productdata: ProductData): Observable<APIData>{
    return this.http.post<ProductData>('http://localhost:3000/api/'+ 'product/createProduct', productdata).catch(this.errorHandler);
  }

  //deleteProduct(productdata: ProductData): Observable<APIData>{
    //return this.http.delete<ProductData>('http://localhost:3000/api/'+ 'product/deleteProduct', productdata).catch(this.errorHandler);
  //}


}
