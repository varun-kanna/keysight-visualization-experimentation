import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import { testRunsByTester } from '../data/data'; // Import the data

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule, NgxChartsModule], // Required for standalone components
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent {
  testRunsByTester = testRunsByTester; // Assign the data to a variable

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
