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
  searchTerm: string;
  constructor(private commentService: CommentsService) {
    this.commentService.getComments().subscribe((res)=>{
      this.comments = [...JSON.parse(<string>localStorage.getItem('coments')) || [], ...res];
    })
  }

  showAllComents(event: any){
    event = JSON.parse(<string>event);

    this.commentService.getComments().subscribe((res)=>{
      this.comments = [ ...event, ...res];
    })
  }
}
