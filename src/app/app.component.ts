import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  books = [
    {name: 'Harry Poter', price: 210},
    {name: 'Bobco', price: 250},
    {name: 'Harry Shprot', price: 300}
  ];
}
