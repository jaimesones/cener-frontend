import { Component } from '@angular/core';
import {SessionService} from "@services/core/session.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private sessionService: SessionService) {}

  isAuthenticated(): boolean {
    return this.sessionService.isAuthenticated();
  }
}
