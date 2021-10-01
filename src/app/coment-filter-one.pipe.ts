import { Pipe, PipeTransform } from "@angular/core";
import { CommentModel } from "./CommentModel";
@Pipe ({
    name: 'comentFilterOne'
})
export class ComentFilterPipeOne implements PipeTransform {
    transform (comments:  CommentModel[], searchTermOne: string): CommentModel[] {
        if(!searchTermOne){
            return comments;
        }

        return comments.filter((comment) =>{
          return comment.title.toLocaleLowerCase().indexOf(searchTermOne.toLocaleLowerCase()) !== -1 ||
            comment.body.toLocaleLowerCase().indexOf(searchTermOne.toLocaleLowerCase()) !== -1
        })

    }
}
