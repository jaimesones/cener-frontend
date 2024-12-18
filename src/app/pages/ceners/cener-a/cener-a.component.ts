import { Component } from '@angular/core';
import {SessionService} from "@services/core/session.service";

@Component({
  selector: 'app-cener-a',
  templateUrl: './cener-a.component.html',
  styleUrls: ['./cener-a.component.css']
})
export class CenerAComponent {
  constructor(private sessionService: SessionService) {}

  isAuthenticated(): boolean {
    return this.sessionService.isAuthenticated();
  }

}
