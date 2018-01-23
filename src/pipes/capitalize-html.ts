import { Pipe, PipeTransform } from '@angular/core';
/**
 * Generated class for the CapitalizePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'capitalizeHtml',
})
export class CapitalizeHtmlPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value:any) {
    if (value) {
      //  return value.charAt(0).toUpperCase() + value.slice(1);
      return value.replace(/\b\w/g, symbol => symbol.toLocaleUpperCase())
    }
    return value;
}
}
