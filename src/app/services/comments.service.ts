import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentModel} from "../CommentModel";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {

  }
  getComments(): Observable<CommentModel[]>{
    return this.http.get<CommentModel[]>("https://jsonplaceholder.typicode.com/posts")
  }
}
