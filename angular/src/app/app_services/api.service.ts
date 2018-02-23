import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient , HttpHeaders  , HttpErrorResponse } from '@angular/common/http';

import { APIData , LoginData } from './models/api.data.structure'


@Injectable()
export class APIService {
  constructor(private http: HttpClient) {}

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

  getProducts(): Observable<APIData> {
    return this.http.get<APIData>('http://localhost:3000/api/' + 'product/getProducts').catch(this.errorHandler);
  }

  login(loginData: LoginData): Observable<APIData> {
    return this.http.post<APIData>('http://localhost:3000/api/auth/login', loginData).catch(this.errorHandler);
  }
}