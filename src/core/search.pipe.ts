import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchFilter',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal =
        val.author.toLocaleLowerCase().includes(args) ||
        // val.year.toLocaleLowerCase().includes(args) ||
        val.country.toLocaleLowerCase().includes(args) ||
        val.title.toLocaleLowerCase().includes(args);
      return rVal;
    });
  }
}
