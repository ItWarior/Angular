import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  str = 'hello world'
  number = 544121.4211545;
  per = 0.36
  data = new Date();
  obj = {
    name: 'Olga',
    surname:'Bobco'
  }
}
