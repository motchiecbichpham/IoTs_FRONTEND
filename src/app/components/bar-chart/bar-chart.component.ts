import { Component, OnInit } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { AirQualityService } from "../../services/air-quality.service";

@Component({
  selector: "app-bar-chart",
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: "./bar-chart.component.html",
  styleUrl: "./bar-chart.component.css",
})
export class BarChartComponent implements OnInit {
  airQualityData: any[] = [];

  constructor(private airQualityService: AirQualityService) {}

  ngOnInit() {
    this.airQualityService.getAirQualityByHour().subscribe((data) => {
      this.airQualityData = data.map((item) => ({
        name: `${item.hour}:00`,
        value: item.value,
      }));
    });
  }
}
