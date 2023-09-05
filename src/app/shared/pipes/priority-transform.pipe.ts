import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityTransform',
})
export class PriorityTransformPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'low':
        return 'Baja Prioridad';
      case 'medium':
        return 'Media Prioridad';
      case 'high':
        return 'Alta Prioridad';
      default:
        return 'Sin Prioridad';
    }
  }
}
