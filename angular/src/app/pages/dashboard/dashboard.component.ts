import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit{
  ngOnInit() {
    console.log(localStorage.getItem('currentUser'));
  }
}
