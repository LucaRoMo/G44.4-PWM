import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  async login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    return this.auth.signOut();
  }

  async register(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  /*
  async loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.auth.signInWithPopup(provider);
  }

  async loginWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.auth.signInWithPopup(provider);
  }*/
}
