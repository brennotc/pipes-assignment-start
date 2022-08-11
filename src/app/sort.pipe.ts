import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {

    const sortedArray: string[] = value.sort((n1,n2) => {
      if (n1.name > n2.name) {
          return 1;
      }

      if (n1.name < n2.name) {
          return -1;
      }

      return 0;
    });

    return sortedArray;

  }

}
