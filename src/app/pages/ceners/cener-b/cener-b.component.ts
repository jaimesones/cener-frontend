import { Component } from '@angular/core';
import {SessionService} from "@services/core/session.service";

@Component({
  selector: 'app-cener-b',
  templateUrl: './cener-b.component.html',
  styleUrls: ['./cener-b.component.css']
})
export class CenerBComponent {
  constructor(private sessionService: SessionService) {}

  isAuthenticated(): boolean {
    return this.sessionService.isAuthenticated();
  }
}
