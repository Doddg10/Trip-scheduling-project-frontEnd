import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../AdminService.service';

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.css']
})
export class AdminSignUpComponent implements OnInit {
  admin = new Admin();
  msg = '';

  constructor(private _Service: AdminService, private _router: Router) { }

  ngOnInit(): void {
  }
  SignUpAdmin()
  {
    this._Service.signupAdminFromRemote(this.admin).subscribe(
      data=> {console.log("Response received");
    this.msg="Registration successful"},
      error =>{console.log("exception occured");
      this.msg=error.error;
    }
      
      
    )
    /*console.log(this.admin);
    this._Service.signupAdminFromRemote(this.admin).subscribe
    (data=>
      {alert("Registration Successfully");
      this.msg='Resgistration successful';
    });
    this._Service.loginAdminFromRemote(this.admin).subscribe
    (error=>
      {alert("Registration failed");
      this.msg-error.error;
    
  });*/
    
 
  }

}
