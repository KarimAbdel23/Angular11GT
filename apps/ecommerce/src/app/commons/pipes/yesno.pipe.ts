import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesno'
})
export class YesnoPipe implements PipeTransform {

  transform(value: boolean): string {

    console.log('HOLAA EEEERRRRYY');

    console.log(value);
    return (value) ? 'Si' : 'No';
  }

}
