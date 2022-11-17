import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    indexAxis: 'y',
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [];

  public barChartData: ChartData<'bar'> = {
    labels: ['84GUU', '50GUU', '30GUU', '24GUU', '7GUU', '4GUU', '1GUU'],
    datasets: [
      {
        barPercentage: 1,
        categoryPercentage: 0.9,
        barThickness: 'flex',
        data: [5, 12, 40, 42, 56, 85, 120],
        backgroundColor: [
          'red',
          'blue',
          'green',
          'blue',
          'red',
          'blue',
          'green',
        ],
        label: 'Available Bid',
      },
    ],
  };
  public barChartDataRev1: ChartData<'bar'> = {
    labels: ['Price', 'Price', 'Price'],
    datasets: [
      {
        // barThickness: 5 * 4,
        data: [5],
        label: '1.5%',
        barThickness: 'flex',
        categoryPercentage: 5 / 40,
        barPercentage: 1,
      },
      {
        //  barThickness: 12 * 4,
        data: [12],
        label: '2.3%',
        barThickness: 'flex',
        categoryPercentage: 12 / 40,
        barPercentage: 1,
      },
      {
        // barThickness: 40 * 4,
        data: [40],
        label: '0.5%',
        barThickness: 'flex',
        categoryPercentage: 1,
        barPercentage: 1,
      },
    ],
  };
  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }
}
