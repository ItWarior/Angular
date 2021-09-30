import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import { FormComponent } from './form/form.component';

import {CommentsService} from "./services/comments.service";


import {ComentFilterPipe} from './coment-filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ComentFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
