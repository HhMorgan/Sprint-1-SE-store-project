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
  private type;
  constructor(private _apiService: APIService ,private route: ActivatedRoute, private router: Router){}

  ngOnInit() {

  }

  showDashboard() {
    this.router.navigate(['dashboard'], { relativeTo: this.route });
  }

  loginClick(){
    if(this.username != null && this.password != null){
      this._apiService.login({ username: this.username, password: this.password, type : this.type }).subscribe((apiresponse: APIData)=>{
        this.loginMessage = apiresponse.msg;
        if( apiresponse.msg.includes('Successful') ){ 
          localStorage.setItem('currentUser',this.username);
          if( apiresponse.msg.includes('user') ){
            localStorage.setItem('type','user');
          }
          else if( apiresponse.msg.includes('admin') ){
            localStorage.setItem('type','admin');
          }
          else if( apiresponse.msg.includes('manager') ){
            localStorage.setItem('type','manager');
          }
         console.log(apiresponse.msg);
          this.showDashboard();
        } else {
          this.loginMessage = apiresponse.msg;
        }
      })
  } else
    this.loginMessage = 'Username or Password Can not Be Empty ';
  }
}




