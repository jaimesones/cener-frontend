import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {RegisterService} from '@services/register.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.css']
})
export class RetailComponent {

  constructor(private router: Router, private registerService: RegisterService,
    private viewportScroller: ViewportScroller) {
    }

    scrollDown() {
      const currentPosition = this.viewportScroller.getScrollPosition(); // Obtiene la posición actual
      const scrollOffset = 1000; // Número de píxeles a desplazar hacia abajo
      this.viewportScroller.scrollToPosition([currentPosition[0], currentPosition[1] + scrollOffset]);
    }



}
