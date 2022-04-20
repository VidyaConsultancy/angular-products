import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selection = 'afadf';

  constructor(private appService: AppService) {
    const sum = this.appService.add(10, 20);
    const diff = this.appService.substract(10, 20);
    console.log(sum, diff, this.appService.operations);
  }
  
  getOps() {
    console.log(this.appService.operations);
  }

  logout() {
    localStorage.clear();
  }
}
