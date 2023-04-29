import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent {
  @Input() images: string[] = [];
  currentIndex = 0;
  nextImage(){
    this.currentIndex++;
    if(this.currentIndex >= this.images.length){
      this.currentIndex = 0; //Si llega a la ultima empieza de nuevo
    }
  }

  prevImage(){
    this.currentIndex++;
    if(this.currentIndex >= this.images.length){
      this.currentIndex = this.images.length - 1;
    }
  }
}
