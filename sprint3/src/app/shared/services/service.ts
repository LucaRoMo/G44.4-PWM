import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class Service {
  constructor(private db: AngularFirestore) { }
  getAllUsers(): Promise<any[]> {
    return new Promise<any[]>((resolve, reject)=> {
      this.db.collection('usuarios')
        .valueChanges({ idField: 'id' })
        .subscribe(
          users => resolve(users),
          error => reject(error)
        );
    })
  }
/*
  addNewUser(newId: any, fName: string, lName: string) {
    this.db.collection<user>('usuarios')
      .doc(newId)
      .set({
        firstName: fName,
        lastName: lName
      });
  }
*/


}
/*import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  // Métodos de autenticación
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.signOut();
  }

}*/
