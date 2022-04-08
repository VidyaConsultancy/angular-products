import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<h1>hello world</h1>`,
  // styles: [`h1 {font-size: 60px; color: tomato}`]
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  product = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: { rate: 3.9, count: 120 },
  };

  constructor() {
    console.log('AppComponent Constructor');
  }

  ngOnInit(): void {
    console.log('AppComponent ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('AppComponent ngOnDestroy');
  }

  ngAfterViewInit(): void {
    console.log('AppComponent ngAfterViewInit');
  }
}
