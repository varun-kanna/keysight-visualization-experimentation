import { Component, HostListener } from '@angular/core';
import { NgxChartsModule, Color, ScaleType } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import {
  testRunsByStats,
  stationsByStatus,
  numStationsByStatus,
  instrumentsByStatus,
} from '../data/pie-chart';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent {
  testRunsByStats = testRunsByStats;
  stationsByStatus = stationsByStatus;
  numStationsByStatus = numStationsByStatus;
  instrumentsByStatus = instrumentsByStatus;

  // Resize based on the screen
  // Set initial dimensions with a max width of 600px
  containerWidth: number = Math.min(600, window.innerWidth * 0.9);
  containerHeight: number = Math.min(400, window.innerHeight * 0.6);

  // Set view property to match container size
  view: [number, number] = [this.containerWidth, this.containerHeight];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.containerWidth = Math.min(600, window.innerWidth * 0.9);
    this.containerHeight = Math.min(400, window.innerHeight * 0.6);
    this.view = [this.containerWidth, this.containerHeight]; // Update view size
  }

  colorSchemeNight: Color = {
    name: 'customScheme', // Unique name for your color scheme
    selectable: true, // Allows users to select colors in the UI (if applicable)
    group: ScaleType.Ordinal, // Group type (use 'Ordinal' for categorical data)
    domain: ['#2E7D32', '#C62828', '#1565C0', '#FF8F00', '#7665C0'], // Your custom color(s)
  };

  showXAxis = true;
  showYAxis = true;
}
