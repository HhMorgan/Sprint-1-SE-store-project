import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [{
    id: 1,
    Name: 'Mayar',
    Price: '6000',
    CreatedAt: '12/12/2003',
    UpdatedAt: '9/9/2009',
    SellerName: 'Omar',
  }];

  getData() {
    return this.data;
  }
}
