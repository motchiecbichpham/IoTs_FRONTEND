import { Component } from '@angular/core';
import { UserTableComponent } from '../user-table/user-table.component';
import { LineChartComponent } from "../line-chart/line-chart.component";
import { BarChartComponent } from "../bar-chart/bar-chart.component";
import {CurrentWeatherComponent} from "../current-weather/current-weather.component"

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [UserTableComponent, LineChartComponent, BarChartComponent, CurrentWeatherComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
