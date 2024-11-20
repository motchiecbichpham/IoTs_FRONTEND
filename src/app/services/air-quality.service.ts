import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AirQualityData } from '../model/air-quality.data';

@Injectable({
  providedIn: 'root',
})
export class AirQualityService {
  constructor(private http: HttpClientModule) {}
  private apiUrl = 'http://localhost:8133/api/environmental-data/daily';
  getAirQualityByHour(): Observable<AirQualityData[]> {
    // let response = this.http
    //   .get<EnvironmentalData[]>(this.apiUrl)
    //   .pipe(tap((response) => console.log(response)));
    // console.log(response);
    return of([
      { hour: 0, value: 25 },
      { hour: 2, value: 35 },
      { hour: 4, value: 45 },
      { hour: 6, value: 30 },
      { hour: 8, value: 25 },
      { hour: 10, value: 35 },
      { hour: 12, value: 45 },
      { hour: 14, value: 30 },
      { hour: 16, value: 45 },
      { hour: 18, value: 30 },
      { hour: 20, value: 25 },
      { hour: 22, value: 35 },
    ]);
  }
}
