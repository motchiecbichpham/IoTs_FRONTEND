import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { AirQualityData, EnvironmentalData } from "../model/air-quality.data";

@Injectable({
  providedIn: "root",
})
export class AirQualityService {
  constructor(private http: HttpClient) {}
  private apiUrl = "http://localhost:8083/api/environmental-data/daily";
  getAirQualityByHour(): Observable<AirQualityData[]> {
    return this.http.get<EnvironmentalData[]>(this.apiUrl).pipe(
      map((data: EnvironmentalData[]) =>
        data.map((item) => ({
          hour: item.hour,
          value: item.eco2,
        })),
      ),
    );
  }
}
