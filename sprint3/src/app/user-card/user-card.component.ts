import {Component} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  informacion: boolean = false;
  imageUrl = "../../assets/down-arrow2.png";
  mostrarInformacion() {
    this.informacion = !this.informacion;
    console.log(this.informacion)
  }

  cambiarImagen(){
    if (this.imageUrl === "../../assets/down-arrow.png"){
      this.imageUrl = "../../assets/down-arrow2.png";
    } else {
      this.imageUrl = "../../assets/down-arrow.png";
    }
  }
}
