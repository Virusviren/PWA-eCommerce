import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private login: AngularFireAuth) {
    this.login.authState.subscribe(user=>console.log(user));
  }

  loginWithGoogle() {
    return this.login.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

  }
  logoutWithGoogle(){
    return this.login.auth.signOut();
  }
}
