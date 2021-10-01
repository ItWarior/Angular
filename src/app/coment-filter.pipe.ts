import { Pipe, PipeTransform } from "@angular/core";
import { CommentModel } from "./CommentModel";
@Pipe ({
    name: 'comentFilter'
})
export class ComentFilterPipe implements PipeTransform {
    transform (comments:  CommentModel[], searchTerm: string): CommentModel[] {
        if(!comments || !searchTerm){
            return comments;
        }
        return comments.filter(comments =>
             comments.body.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);
    }
}