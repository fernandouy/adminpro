import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: ``,
})
export class DonaComponent {
  @Input() title: string = 'Sin titulo';
  @Input('labels') doughnutChartLabels: string[] = [];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    datasets: [
      {
        label: 'Sin datos',
        data: [100],
      },
    ],
  };

  public doughnutChartType: ChartType = 'doughnut';
}
