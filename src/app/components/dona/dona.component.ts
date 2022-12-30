import { Component, Input } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {

  @Input() nombreChart: string = 'Sin titulo';

  @Input('labels') doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] },
    ]
  };
  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public doughnutChartType: ChartType = 'doughnut';
}
