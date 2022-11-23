import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss', './../../app.component.scss' ]
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
