import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selection = 'afadf';
  ob: Observable<number>;

  constructor(private appService: AppService) {
    const sum = this.appService.add(10, 20);
    const diff = this.appService.substract(10, 20);
    console.log(sum, diff, this.appService.operations);
    this.ob = new Observable((sub) => {
      sub.next(10);
      sub.next(20);
      sub.next(30);
      setTimeout(() => {
        sub.next(50);
      }, 1000);
      sub.next(40);
    });
    this.ob.subscribe((value) => {
      console.log('s1 ', value)
    })
  }

  logout() {
    localStorage.clear();
    this.ob.subscribe((value) => {
      console.log('s2 ', value);
    });
  }
}
