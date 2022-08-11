import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})

export class ReversePipe implements PipeTransform {

  transform(value: string) {

    const splitString = value.split('');
    const reverseArray = splitString.reverse();

    return reverseArray.join('');
  }

}
