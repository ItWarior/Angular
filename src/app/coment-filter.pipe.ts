import {Pipe, PipeTransform} from "@angular/core";
import {CommentModel} from "./CommentModel";

@Pipe({
  name: 'comentFilter'
})
export class ComentFilterPipe implements PipeTransform {
  transform(comments: any, searchTerm: string):CommentModel[]{
    let findComents = [];

    if (!searchTerm) {
      return comments;
    }

    for (const coment of comments) {
      const regexp = new RegExp(searchTerm, 'i');

      for (let key in coment) {
        if (coment.hasOwnProperty(key)) {

          if (typeof (coment[key]) === 'string') {
            let res = coment[key].match(regexp);
            if (res) {
              findComents.push(coment);
            }
          } else if (typeof (coment[key]) === 'number') {
            let res = +searchTerm === coment[key];
            if (res) {
              findComents.push(coment);
            }
          }
        }
      }
    }
  return findComents
  }
}
