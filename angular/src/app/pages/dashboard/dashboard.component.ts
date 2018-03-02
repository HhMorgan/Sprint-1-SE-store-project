import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit{
  
  ngOnInit() {
    console.log(localStorage.getItem('currentUser'));
    let user: string = localStorage.getItem('currentUser');
    if(JSON.parse(user)=== "null"){
      document.getElementById("t1").innerHTML = "";
    }
    else{
      document.getElementById("t1").innerHTML = JSON.parse(localStorage.getItem('currentUser'));
    }
  }
}
