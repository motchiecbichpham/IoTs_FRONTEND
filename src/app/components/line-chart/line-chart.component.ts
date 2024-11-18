import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../../services/temperature.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

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
      this.temperatureData = [
        {
          name: 'Temperature',
          series: data.map((item) => ({
            name: `${item.hour}:00`,
            value: item.temperature,
          })),
        },
      ];
    });
  }
}
