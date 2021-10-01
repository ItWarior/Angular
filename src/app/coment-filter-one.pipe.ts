import { Pipe, PipeTransform } from "@angular/core";
import { CommentModel } from "./CommentModel";
@Pipe ({
    name: 'comentFilterOne'
})
export class ComentFilterPipeOne implements PipeTransform {
    transform (comments:  CommentModel[], searchTermOne: string): CommentModel[] {
        if(!comments || !searchTermOne){
            return comments;
        }

        return comments.filter(comments =>
             comments.title.toLocaleLowerCase().indexOf(searchTermOne.toLocaleLowerCase()) !== -1);
    }
}