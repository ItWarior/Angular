import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  @Input() bookInsideComponent : any;
  @Output() ONBUTTONCLICKED = new EventEmitter();

  buttonClicked(){
    console.log(this.bookInsideComponent);
    this.ONBUTTONCLICKED.emit(this.bookInsideComponent)
  }
}
