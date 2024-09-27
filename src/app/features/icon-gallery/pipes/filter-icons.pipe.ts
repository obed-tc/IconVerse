import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterIcons'
})
export class FilterIconsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
