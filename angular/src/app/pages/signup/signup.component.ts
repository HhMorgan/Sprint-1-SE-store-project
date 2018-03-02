import { Component, OnInit } from '@angular/core';
import { APIService } from '../../app_services/api.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';
import { APIData , LoginData } from '../../app_services/models/api.data.structure'

@Component({
  selector: 'app-signup',
  styleUrls: ['./template/signup.component.scss'],
  templateUrl: './template/signup.component.html',
})
export class SignupComponent implements OnInit {
  private username;
  private password;
  private confirm_password;
  private registerMessageStatus;
  constructor(private _apiService: APIService ,private route: ActivatedRoute, private router: Router){}


  ngOnInit() {
  }

  showDashboard(){
    this.router.navigate(['dashboard'], { relativeTo: this.route });
  }
  registerClick(){
    if(this.username != null){
      if(this.password != null || this.confirm_password != null ){
        if(this.password ==  this.confirm_password){
          this._apiService.createUser({ username: this.username, password: this.password, type: 'user'}).subscribe((apiresponse: APIData)=>{
            if(apiresponse.msg.includes('Successfully'))
              this.showDashboard();
            this.registerMessageStatus = apiresponse.msg;
         });
        } else 
          this.registerMessageStatus = "Password Mismatch";
      } else 
        this.registerMessageStatus = "Password Can't Be Empty";
    } else 
      this.registerMessageStatus = "Username Can't Be Empty";
  }
}
