import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TemperatureService } from '../../services/temperature.service';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css',
})
export class LineChartComponent implements OnInit {
  temperatureData: any[] = [];

  constructor(private temperatureService: TemperatureService) {}

  ngOnInit() {
    this.temperatureService.getTemperatureByHour().subscribe((data) => {
      const hourData: any = {};
      data.forEach(({ hour, temperature }) => {
        if (!hourData[hour]) {
          hourData[hour] = { sum: 0, count: 0 };
        }
        hourData[hour].sum += temperature;
        hourData[hour].count += 1;
      });
      const result = Object.keys(hourData).map((hour) => ({
        hour: parseInt(hour),
        value: hourData[hour].sum / hourData[hour].count,
      }));

      this.temperatureData = [
        {
          name: 'Temperature',
          series: result.map((item) => ({
            name: `${item.hour}:00`,
            value: item.value,
          })),
        },
      ];
    });
  }
}
