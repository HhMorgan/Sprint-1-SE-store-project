import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit{
  ngOnInit() {
    let user: string = localStorage.getItem('currentUser');
    if(JSON.parse(user)=== "null"){
    document.getElementById("t1").innerHTML = "";
  }
  else{
    document.getElementById("t1").innerHTML = "Hello "+JSON.parse(localStorage.getItem('currentUser'));
  }
  }
}
