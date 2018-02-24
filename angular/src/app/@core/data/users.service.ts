import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class UserService {

  private users = {
    AhmedAshraf: { name: 'Ahmed Ashraf', picture: 'assets/images/ahmedashraf.jpg', Description : '???'},
    AhmedAyman: { name: 'Ahmed Ayman', picture: 'assets/images/Ahmedayman.jpg', Description : '???' },
    Aya2: { name: 'Aya', picture: 'assets/images/aya2.jpg' ,Description : '???'},
    MahmmoudGamal: { name: 'Mahmmoud Gamal', picture: 'assets/images/MahmmoudGamal.jpg' , Description : 'I love chess.'},
    Habiba: { name: 'Habiba', picture: 'assets/images/HabibaElHussein.jpg', Description : 'I love cooking' },
    // eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
    // jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
    // lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
    // alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
    // kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
  };

  private userArray: any[];

  constructor() {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return Observable.of(this.users);
  }

  getUserArray(): Observable<any[]> {
    return Observable.of(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return Observable.of(this.userArray[counter]);
  }
}
