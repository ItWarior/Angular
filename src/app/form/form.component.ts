import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() {
  }

  formObject: any = {
    userId: 5,
    title: '',
    body: ''
  }

  @Output() onButtonClicked = new EventEmitter();

  MessageControlGrop: FormGroup | any

  ngOnInit(): void {

    this.MessageControlGrop = new FormGroup({
      title: new FormControl(),
      body: new FormControl()
    });

    this.MessageControlGrop.valueChanges.subscribe((value: any) => {
      this.formObject.title = value.title;
      this.formObject.body = value.body;
    });
  }

  buttonClicked(form: any, text: any) {

    const comentsFormStorage: string[] = JSON.parse(<string>localStorage.getItem('coments')) || [];
    const addNewComentToArr = JSON.stringify(comentsFormStorage.concat(this.formObject));
    localStorage.setItem('coments', addNewComentToArr);

    this.formObject.title = '';
    text.value = '';
  }
}
