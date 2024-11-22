import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { UserTableComponent } from './components/user-table/user-table.component';
@NgModule({
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    RouterModule,
    AppComponent,
    DashboardComponent,
    BarChartComponent,
    LineChartComponent,
    UserTableComponent,
    NgxChartsModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
})
export class AppModule {}
