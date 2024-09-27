import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFile'
})
export class NameFilePipe implements PipeTransform {
  transform(ruta?: string): string {
    if (!ruta) return 'Sinnombre';
    return ruta.split('/').pop()?.split('.')[0] || 'Sinnombre';
  }
}
