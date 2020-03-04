import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'baby'
})
export class BabyPipe implements PipeTransform {

  transform(input: string, ...args: any[]): string {
    return input.toLowerCase()
        .replace(/r/g, 'w')
        .replace(/sh/g, 's')
        .replace(/n/g, 'm')
        .replace(/ch/g, 't')
        .replace(/f/g, 'p')
        .replace(/ve/g, 'b')
        .replace(/l/g, 'w');
  }

}
