import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: any[]=[
    {
      id: 1,
      image:"../assets/icon.png",
      name:"Carlos1",
      last:"Montoya",
      role:"Profesor",
      subject:"Mates",
    },
    {
      id: 2,
      image:"../assets/icon.png",
      name:"Carlos",
      last:"Montoya",
      role:"Profesor",
      subject:"Mates",
    },
    {
      id: 3,
      image:"../assets/icon.png",
      name:"Pablo",
      last:"Montoya",
      role:"Profesor",
      subject:"Mates",
    },
    {
      id: 4,
      image:"../assets/icon.png",
      name:"Luca",
      last:"",
      role:"Profesor",
      subject:"Mates",
    }
  ]
}
