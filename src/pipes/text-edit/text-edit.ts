import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TextEditPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'textEdit',
})
export class TextEditPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.replace(new RegExp('-', 'g'), ' ')
  }
}