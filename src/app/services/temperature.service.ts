import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { EnvironmentalData } from "../model/air-quality.data";
import { TemperatureData, WeatherData } from "../model/temperature.data";

@Injectable({
  providedIn: "root",
})
export class TemperatureService {
  constructor(private http: HttpClient) {}
  private apiUrl = "http://localhost:8083/api/environmental-data/daily";
  private temperatureURL =
    "https://api.open-meteo.com/v1/forecast?latitude=43.6048&longitude=1.4428&current=temperature_2m,is_day,rain,cloud_cover&hourly=temperature_2m&forecast_days=1&models=meteofrance_seamless";
  getTemperatureByHour(): Observable<TemperatureData[]> {
    return this.http.get<EnvironmentalData[]>(this.apiUrl).pipe(
      map((data: EnvironmentalData[]) =>
        data.map((item) => ({
          hour: item.hour,
          temperature: item.temperature,
        })),
      ),
    );
  }

  getOutsideTemperature(): Observable<WeatherData> {
    return this.http
      .get<WeatherData>(this.temperatureURL)
      .pipe(map((data: WeatherData) => data));
  }
}
