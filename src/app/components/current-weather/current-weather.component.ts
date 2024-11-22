import { Component, OnInit } from "@angular/core";
import { WeatherData } from "../../model/temperature.data";
import { TemperatureService } from "../../services/temperature.service";
import { CommonModule } from "@angular/common";


@Component({
  selector: "app-current-weather",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./current-weather.component.html",
  styleUrl: "./current-weather.component.css",
})
export class CurrentWeatherComponent implements OnInit {
  weatherData:WeatherData| undefined;
  error:string|null = null;
  nextThreeHours:{time:string, temperature_2m:number}[] = []

  constructor (private temperatureService:TemperatureService){}

  ngOnInit(): void {
      this.temperatureService.getOutsideTemperature().subscribe({
        next: (data) => {
          this.weatherData = data;
          this.error = null;
          this.calculateNextThreeHours(data);  
        },
        error: (err) => {
          this.error = err;
          this.weatherData = undefined;
        }
      })
  }


  private calculateNextThreeHours(data:WeatherData):void{
    const currentTime = new Date(data.current.time);
    const currentHour = currentTime.getHours();

    const startIndex = data.hourly.time.findIndex(time => new Date(time).getHours() === currentHour);

    for(let i =  2; i <= 4; i++){
      if(startIndex + i< data.hourly.time.length){
        const timeStr = data.hourly.time[startIndex + i];
        const hourStr = timeStr.split('T')[1];

        this.nextThreeHours.push({
          time: hourStr,
          temperature_2m: data.hourly.temperature_2m[startIndex + i]
        })
      }
    }

  }
}