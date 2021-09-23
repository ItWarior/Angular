import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow'
})

//{{5|pow:2}}<br>

export class PowPipe implements PipeTransform {

  transform(value: any, arg?: any): any  {
    return Math.pow(value, arg);
  }

}
