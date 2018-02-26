import { Component, OnInit } from '@angular/core';
import { APIService } from '../../app_services/api.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { APIData , LoginData } from '../../app_services/models/api.data.structure'

@Component({
  selector: 'app-login',
  styleUrls: ['./template/login.component.scss'],
  templateUrl: './template/login.component.html',
})

export class LoginComponent implements OnInit {
  private username;
  private password;
  private loginMessage;

  constructor(private _apiService: APIService ,private route: ActivatedRoute, private router: Router){}

  ngOnInit() {

  }

  showDashboard(){
    this.router.navigate(['dashboard'], { relativeTo: this.route });
  }

  loginClick(){
    this._apiService.login({ username: this.username, password: this.password }).subscribe((apiresponse: APIData)=>{
      this.loginMessage = apiresponse.msg;
      if( apiresponse.msg.includes('Successful') ){ //D2a 7aga mo2kta
        this.showDashboard();
      } else {
        this.loginMessage = apiresponse.msg;
      }
    })
  }
}
