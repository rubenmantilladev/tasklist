import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTransform',
})
export class StatusTransformPipe implements PipeTransform {
  transform(value: string): string {
    if (value === 'in_progress') {
      return 'En progreso';
    } else if (value === 'not_started') {
      return 'No iniciado';
    } else if (value === 'completed') {
      return 'Completado';
    } else {
      return 'Desconocido';
    }
  }
}
