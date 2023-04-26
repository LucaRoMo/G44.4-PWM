import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {of} from "rxjs"

// @ts-ignore
import data from '../../../JSON_Files/subjects.json';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  constructor(protected http: HttpClient) {

  }

  getAsignaturas(): Observable<any[]>{
    return of(data.asignaturas)
  }
}
