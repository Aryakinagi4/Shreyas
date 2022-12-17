import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username1:any;
  password:any;
  errormsg:any;
  constructor(private auth:AuthorizationService,private route:Router) { }

  ngOnInit(): void {
  }
  shreyas(){
    if(this.username1.trim().length===0)
    {
      this.errormsg="Enter Username";
    }
    if(this.password.trim().length===0)
    {
      this.errormsg="Enter Password";
    }
    else{
    let res=this.auth.login(this.username1,this.password)
    if(res==200)
    {
      alert("200");
      this.route.navigate(['first-home']);
    }
    else{
      this.errormsg="Invalid Authentication"
    }
  }
  }

}
