import { Injectable } from '@angular/core';
import {FirestoreService} from "../firestore/firestore.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(protected http: HttpClient, private serv: FirestoreService) {  }

  /*getUsers(): Observable<Users[]>{
    return this.serv.getAllDocs(this.collection);:
  }*/


}
