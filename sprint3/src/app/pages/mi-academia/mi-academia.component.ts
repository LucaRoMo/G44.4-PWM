import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-mi-academia',
  templateUrl: './mi-academia.component.html',
  styleUrls: ['./mi-academia.component.css']
})
export class MiAcademiaComponent {
  asignaturas : any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('../../../JSON_Files/subjects.json').subscribe((data: any) => {
      this.asignaturas = data.asignaturas;
      console.log(this.asignaturas)
    });
  }
}
