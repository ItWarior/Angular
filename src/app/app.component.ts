import {Component} from '@angular/core';
import {CommentsService} from "./services/comments.service";
import {CommentModel} from "./CommentModel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  comments: CommentModel[] = [];

  constructor(private commentService: CommentsService) {
    this.commentService.getComments().subscribe((res)=>{
        this.comments = res
    })
  }

}
