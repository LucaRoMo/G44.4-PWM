import { Injectable } from '@angular/core';
import {addDoc, setDoc, getDoc, deleteDoc, updateDoc, doc, collection, collectionData, Firestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) {

  }

  getAllDocs(coll: string){
    const collectionFireStore = collection(this.firestore, coll);
    return collectionData(collectionFireStore,{idField: 'id'}) as Observable<any>;
  }


  createDoc(coll: string, data:{}){
    const ref = collection(this.firestore,coll)
    return addDoc(ref,data)
  }

  deleteDoc(coll : string,id:string){
    const ref = doc(this.firestore,coll,id);
    return deleteDoc(ref)
  }

  updateDoc(coll: string,data: {}){
    const ref = doc(this.firestore,coll)
    return updateDoc(ref,data)
  }

  setDocWithId(coll:string,data:{},id:string){
    const ref = doc(this.firestore,coll,id)
    return setDoc(ref,data)
  }

  getDocWithId(coll:string,id:string){
    const ref = doc(this.firestore,coll,id)
      return getDoc(ref)
  }
}
