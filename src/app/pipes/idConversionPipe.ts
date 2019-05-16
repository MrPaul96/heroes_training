import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idPipe'
})

export class idConversionPipe implements PipeTransform {

  transform(value: number): string {
    console.log("el valor es" + value);
    if (value === 1) {
      return value + "st";
    }
    else if (value === 2) {
      return value + "nd";
    }
    else if (value === 3) {
      return value + "rd";
    }
    else {
      return value + "th";
    }
  }

}
