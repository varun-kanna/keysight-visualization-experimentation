import { Component, HostListener } from '@angular/core';
import { NgxChartsModule, Color, ScaleType } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import {
  testRunsByTester,
  testFirstPassReTestFail,
  testFailureCount,
  stationsByLocation,
  stationUsage,
  pendingUpdatesByStatus,
  updateHistoryByStatus,
  releaseByStatus,
  oeeScore,
  availabilityByStationInMinutes,
  performanceByStationInMinutes,
  throughputByStation,
  calibrationInfo,
} from '../data/bar-chart';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent {
  testRunsByTester = testRunsByTester;
  testFirstPassReTestFail = testFirstPassReTestFail;
  testFailureCount = testFailureCount;
  stationsByLocation = stationsByLocation;
  stationUsage = stationUsage;
  pendingUpdatesByStatus = pendingUpdatesByStatus;
  updateHistoryByStatus = updateHistoryByStatus;
  releaseByStatus = releaseByStatus;
  oeeScore = oeeScore;
  availabilityByStationInMinutes = availabilityByStationInMinutes;
  performanceByStationInMinutes = performanceByStationInMinutes;
  throughputByStation = throughputByStation;
  calibrationInfo = calibrationInfo;

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

  showXAxis = true;
  showYAxis = true;
  colorSchemeAllBlue: Color = {
    name: 'customScheme', // Unique name for your color scheme
    selectable: true, // Allows users to select colors in the UI (if applicable)
    group: ScaleType.Ordinal, // Group type (use 'Ordinal' for categorical data)
    domain: ['#007bff'], // Your custom color(s)
  };
}
