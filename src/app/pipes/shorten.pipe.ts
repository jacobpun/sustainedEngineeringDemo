import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'shortStr'})
export class ShortenPipe implements PipeTransform {
  transform(value: string, length: number): string {
    return value.substr(0, length) + ' ...';
  }
}