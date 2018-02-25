import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class UserService {

  private users = {
    AhmedAshraf: { name: 'Ahmed Ashraf', picture: 'assets/images/ahmedashraf.jpg', Description : '???'},
    AhmedAyman: { name: 'Ahmed Ayman', picture: 'assets/images/Ahmedayman.jpg', Description : '???' },
    Aya2: { name: 'Aya', picture: 'assets/images/aya2.jpg' , Description : '???'},
    MahmmoudGamal: { name: 'Mahmmoud Gamal', picture: 'assets/images/MahmmoudGamal.jpg'
    , Description : 'I love chess.'},
    Habiba: { name: 'Habiba', picture: 'assets/images/HabibaElHussein.jpg', Description : 'I love cooking' },
    Mariam: { name: 'Mariam', picture: 'assets/images/Mariam.JPG', Description : '???' },
    MayarLotfy: { name: 'MayarLotfy', picture: 'assets/images/MayarLotfy.jpg', Description : '???' },
    MohamedAdel: { name: 'MohamedAdel', picture: 'assets/images/MohamedAdel.JPG', Description : 'I love Debugging' },
    Morgan: { name: 'Hesham Morgan', picture: 'assets/images/morgan.jpg', Description : 'I love Tech' },
    Nada: { name: 'Nada', picture: 'assets/images/nada.jpg', Description : '???' },

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
