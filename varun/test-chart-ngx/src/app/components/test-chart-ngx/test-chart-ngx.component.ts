import { Component, OnInit } from '@angular/core';
import { NgxChartsModule, LegendPosition } from '@swimlane/ngx-charts';
import { TestRun } from '../../models/test-chart-ngx';

@Component({
  selector: 'app-test-runs-chart',
  standalone: true,
  imports: [NgxChartsModule],
  template: `
    <div class="chart-container">
      <ngx-charts-pie-chart
        [view]="view"
        [scheme]="'cool'"
        [results]="data"
        [gradient]="gradient"
        [legend]="showLegend"
        [labels]="showLabels"
        [doughnut]="isDoughnut"
        [legendPosition]="legendPosition"
      >
      </ngx-charts-pie-chart>
    </div>
  `,
  styles: [
    `
      .chart-container {
        width: 100%;
        height: 400px;
      }
    `,
  ],
})
export class TestRunsChartComponent implements OnInit {
  data: TestRun[] = [
    { name: 'Pass', value: 189 },
    { name: 'Error', value: 57 },
    { name: 'Aborted', value: 41 },
    { name: 'Not Set', value: 103 },
  ];

  view: [number, number] = [700, 400];
  gradient = false;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;
  legendPosition: LegendPosition = 'right' as LegendPosition; // fixed type assignment

  constructor() {}

  ngOnInit(): void {}
}
