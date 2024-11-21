import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AirQualityService } from '../../services/air-quality.service';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css',
})
export class BarChartComponent implements OnInit {
  airQualityData: any[] = [];

  constructor(private airQualityService: AirQualityService) {}

  ngOnInit() {
    this.airQualityService.getAirQualityByHour().subscribe((data) => {
      const hourData: any = {};
      data.forEach(({ hour, value }) => {
        if (!hourData[hour]) {
          hourData[hour] = { sum: 0, count: 0 };
        }
        hourData[hour].sum += value;
        hourData[hour].count += 1;
      });
      const result = Object.keys(hourData).map((hour) => ({
        hour: parseInt(hour),
        value: hourData[hour].sum / hourData[hour].count,
      }));

      this.airQualityData = result.map((item) => ({
        name: `${item.hour}:00`,
        value: item.value,
      }));
    });
  }
}
