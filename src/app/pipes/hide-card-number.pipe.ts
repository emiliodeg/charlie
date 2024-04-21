import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideCardNumber',
  standalone: true,
})
export class HideCardNumberPipe implements PipeTransform {
  transform(value: string): string {
    return '•••• ' + value.slice(-4);
  }
}
