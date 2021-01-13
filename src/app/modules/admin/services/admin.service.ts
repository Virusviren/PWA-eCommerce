import { Injectable } from '@angular/core';
import {AngularFireDatabase}from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../../authentication/services/login.service';
import { UserService } from '../../users/services/user.service';
import { switchMap,map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate{

  constructor(private db:AngularFireDatabase,private login:LoginService, private userService:UserService, private route:Router) { }
  canActivate()
  {
    return this.login.getCurrentUserDb()
      .pipe(
        map(user=>{
          if(!user) return false;
          if(user.isAdmin) return true;
          this.route.navigate(['/login']);
          return false;
        })
      )


  }
}
