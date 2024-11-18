import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TemperatureData } from '../model/temperature.data';

@Injectable({
  providedIn: 'root',
})
export class TemperatureService {
  getTemperatureByHour(): Observable<TemperatureData[]> {
    return of([
      { hour: 0, temperature: 4 },
      { hour: 2, temperature: 5 },
      { hour: 4, temperature: 7 },
      { hour: 6, temperature: 7 },
      { hour: 8, temperature: 7 },
      { hour: 10, temperature: 10 },
      { hour: 12, temperature: 11 },
      { hour: 14, temperature: 16 },
      { hour: 16, temperature: 15 },
      { hour: 18, temperature: 13 },
      { hour: 20, temperature: 12 },
      { hour: 22, temperature: 8 },
    ]);
  }
}
