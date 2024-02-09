import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
  standalone: true
})
export class TestPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string | null {
    if(value.trim().length)
      return value.trim()
    return null;
  }

}
