import { Injectable } from '@angular/core';
import {FirestoreService} from "../firestore/firestore.service";
import {HttpClient} from "@angular/common/http";
import { Auth} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(protected http: HttpClient, private serv: FirestoreService) {  }

  /*getUsers(): Observable<Users[]>{
    return this.serv.getAllDocs(this.collection);:
  }

  register( email:string, password:string){
    return createUserWithEmailAndPassword(this.auth, email, password)
  }*/

  /*login( email:string, password:string){
    console.log("El email:",email)
    console.log("la contraseña: ",password)
    //return this.authService.login();
    return signInWithEmailAndPassword(this.auth, email, password)
  }*/
}
