import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../authentication/services/login.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {

  user:firebase.User;
  constructor(private login:LoginService) { }

  ngOnInit() {
  this.login.getCurrentUser()
    .subscribe(user=>this.user=user);
  }
logout(){
    this.login.logoutWithGoogle();
}
}
