import { Component } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //currentUser: User;
  constructor(private auth: AuthService){}

  ngOnInit() {

  }
  burgerClosed: boolean = true;
  logout() {
    this.auth.logout()
      .then(() => {
        console.log('Logout exitoso');
        // Aquí puedes redirigir al usuario a la página de inicio de sesión o a otra página.
      })
      .catch(error => console.log(error));
  }



  ChangeBurger() {
    this.burgerClosed = !this.burgerClosed;
  }
}
