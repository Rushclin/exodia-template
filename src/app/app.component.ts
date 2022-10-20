import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./../styles.scss']
})
export class AppComponent{
  title = 'exsodia-template';

  toggle = false

  ex_toggle_nav = () => {
    this.toggle=!this.toggle
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    margin: 20,
    responsive: {
      0: {
        items: 1 
      },
      500: {
        items: 2
      },
      1000: {
        items: 3
      },
     /*  1000: {
        items: 4
      } */
    },
    nav: false
  }

}
