import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule, NgxChartsModule], // Required for standalone components
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent {
  testRunsByTester = [
    { name: 'Tester 1', value: 45 },
    { name: 'Tester 2', value: 20 },
    { name: 'Tester 3', value: 42 },
    { name: 'Tester 4', value: 29 },
    { name: 'Tester 5', value: 52 },
  ];

  view: [number, number] = [700, 400];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Testers';
  showYAxisLabel = true;
  yAxisLabel = 'Test Runs';
  colorScheme = 'vivid';
}
