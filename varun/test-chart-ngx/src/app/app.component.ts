import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@Component({
  selector: 'app-root',
  standalone: true, // Required for standalone components
  imports: [CommonModule, NgxChartsModule, BarChartComponent], // Import required modules
  template: `<app-bar-chart></app-bar-chart>`, // Use the bar chart component
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
