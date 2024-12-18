import { Component } from '@angular/core';
import {SessionService} from "@services/core/session.service";

@Component({
  selector: 'app-cener-c',
  templateUrl: './cener-c.component.html',
  styleUrls: ['./cener-c.component.css']
})
export class CenerCComponent {
  constructor(private sessionService: SessionService) {}

  isAuthenticated(): boolean {
    return this.sessionService.isAuthenticated();
  }
}
