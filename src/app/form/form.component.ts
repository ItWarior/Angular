import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() allComents: any

  formObject: any = {
    userId: 5,
    id: null,
    title: null,
    body: null
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
    const comentsFormStorage = JSON.parse(<string>localStorage.getItem('coments')) || [];

    const stream$ = new Observable((observe) => {
      observe.next(this.allComents)
    })
    stream$.subscribe(
      (val: [] |any) => {
        if (comentsFormStorage.length === 0){
          this.formObject.id = val[val.length - 1]['id'] + 1;
        }else{

          this.formObject.id = comentsFormStorage[0]['id'] + 1;
        }
        const addNewComentToArr = JSON.stringify([this.formObject, ...comentsFormStorage]);
        localStorage.setItem('coments', addNewComentToArr);
        this.onButtonClicked.emit(addNewComentToArr);
      }
    )

    this.formObject.title = '';
    text.value = '';
  }
}
