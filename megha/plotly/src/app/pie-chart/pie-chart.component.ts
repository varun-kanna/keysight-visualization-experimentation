import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotlyModule } from 'angular-plotly.js';
import PlotlyJS from 'plotly.js-dist-min';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-pie-chart',
  imports: [CommonModule, PlotlyModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
  graph = {
    data: [
      {
        values: [189, 57, 41, 103],
        labels: ['Pass', 'Error', 'Aborted', 'Not Set'],
        type: 'pie'
      }
    ],
    layout: {
      xaxis: { title: 'Test Runs/ campaign Runs by Status' },
      yaxis: { title: 'Count' },
      autosize: true,
      responsive: true,
    },
  };
}
