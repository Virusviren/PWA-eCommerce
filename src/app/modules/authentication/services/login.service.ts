import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {CanActivate, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {

  constructor(private login: AngularFireAuth, private router: Router) {
    this.login.authState.subscribe(user => console.log(user));
  }

  loginWithGoogle() {
    return this.login.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

  }
  logoutWithGoogle() {
    return this.login.auth.signOut();
  }
  getCurrentUser() {
    return this.login.authState;
  }
  canActivate(): Observable<boolean> {
   return this.login.authState
     .pipe(
       map(user => {
         if (user) { return true; }
         else
         {
           this.router.navigate(['/login'])
         return false;
       }
       })
     );

  }
}
