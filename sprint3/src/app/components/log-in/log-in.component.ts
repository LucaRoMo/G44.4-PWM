import {Component} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {


  email: string = "";
  password: string = "";
  //formLogin: FormGroup;

  constructor(
    private auth: AuthService
  ) {
    /*this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })*/

  }


  /*constructor(private userService: UsersService, private router: Router) { }
*/


  onSubmit() {
    this.auth.login(this.email, this.password)
      .then(userCredential => {
        console.log(userCredential);
      })
      .catch(error => {
        console.log(error);
      });
  }
    /*this.authService.login(this.email.trim(), this.password.trim())
      .then(response => {
        console.log("Log In ",response);
        this.router.navigate(['/miAcademia'])
      })
      .catch(error => console.log(error));

  }*/


}
