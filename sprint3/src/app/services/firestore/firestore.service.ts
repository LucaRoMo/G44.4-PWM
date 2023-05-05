import { Injectable } from '@angular/core';
import {collection, collectionData, Firestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) {

  }

  getAllDocs(coll: string){
    const user = collection(this.firestore, coll);
    return collectionData(user,{idField: 'id'}) as Observable<any>;
  }

}
