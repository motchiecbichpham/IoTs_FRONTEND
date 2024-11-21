import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EnvironmentalData } from '../model/air-quality.data';
import { TemperatureData } from '../model/temperature.data';

@Injectable({
  providedIn: 'root',
})
export class TemperatureService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:8089/api/environmental-data/daily';
  getTemperatureByHour(): Observable<TemperatureData[]> {
    return this.http.get<EnvironmentalData[]>(this.apiUrl).pipe(
      map((data: EnvironmentalData[]) =>
        data.map((item) => ({
          hour: item.hour,
          temperature: item.temperature,
        }))
      )
    );
  }
}
