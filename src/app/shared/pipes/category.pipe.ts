import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'front-end':
        return 'code';
      case 'back-end':
        return 'computer';
      case 'full-stack':
        return 'devices_other';
      case 'mobile':
        return 'phone_iphone';
    }
    return 'code';
  }
}
