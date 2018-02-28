import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [{
    id: 1,
    name: 'Mark',
    price: 123,
    createdAt:'26/2/2018',
    updatedAt:'28/2/2018',
  }];

  getData() {
    return this.data;
  }
}
