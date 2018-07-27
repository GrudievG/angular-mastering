import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() images;
  imgIndex = 0;
  goToPrevImage() {
    if (this.imgIndex === 0) { return; }
    this.imgIndex--;
  }
  goToNextImage() {
    if (this.imgIndex >= this.images.length - 1) { return; }
    this.imgIndex++;
  }

}
