import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class UserService {

  private users = {
    AhmedAshraf: { name: 'Ahmed Ashraf', picture: 'assets/images/ahmedashraf.jpg'
    , Description : '???'},
    AhmedAyman: { name: 'Ahmed Ayman', picture: 'assets/images/Ahmedayman.jpg',
    Description : '???'},
    Aya2: { name: 'Aya', picture: 'assets/images/aya2.jpg' , Description : '???'},
    MahmmoudGamal: { name: 'Mahmmoud Gamal', picture: 'assets/images/MahmoudGamal.jpg'
    , Description : 'I love chess.'},
    Habiba: { name: 'Habiba', picture: 'assets/images/HabibaElHussein.jpg'
    , Description : 'I love cooking'},
    MayarLotfy: { name: 'MayarLotfy', picture: 'assets/images/MayarLotfy.jpg',
    Description : 'I am a passionate Archery player' },
    MohamedAdel: { name: 'MohamedAdel', picture: 'assets/images/MohamedAdel.JPG',
    Description : 'I love Debugging' },
    Morgan: { name: 'Hesham Morgan', picture: 'assets/images/morgan.jpg',
    Description : 'I love Tech' },
    Nada: { name: 'Nada', picture: 'assets/images/nada.jpg', Description : '???'},
    Sarah :{ name:'Sara Gamal', picture:'assets/images/SarahGamal.jpg',
    Description:'Languages, impressionism and symbols.'},
    Tarek :{ name:'Tarek Abdelrahman', picture:'assets/images/Tarek.JPG',
    Description:'Football is my passion' },
    Youhanna :{ name:'Youhanna Adel',picture:'assets/images/youhannaadel.jpg',
    Description:'???'},
    Mariam :{ name:'Mariam Salama', picture:'assets/images/Mariam.JPG', Description:'I like to read'},
    Salma :{ name:'Salma Zaki', picture:'assets/images/salmazaki.jpg', Description:'???'},
    Shaker :{ name:'Omar Shaker', picture:'assets/images/OmarShaker.jpg', Description:'I love coding.'},
    Hesham :{ name:'Mohamed Hesham', picture:'assets/images/mohamed_hesham.jpg', Description:'I love drawing and art in general'},

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
