import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotlyModule } from 'angular-plotly.js';
import PlotlyJS from 'plotly.js-dist-min';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-bar-graph',
  imports: [CommonModule, PlotlyModule],
  templateUrl: './barGraph.component.html',
  styleUrl: './barGraph.component.scss'
})
export class barGraphComponent {
  graph = {
    data: [
      {
        x: ['Tester 1', 'Tester 2', 'Tester 3', 'Tester 4', 'Tester 5'],
        y: [45, 20, 42, 29, 52],
        type: 'bar'
      }
    ],
    layout: {
      title: 'Sample Bar Chart',
      xaxis: { title: 'Number of Test Run by Tester/Operator' },
      yaxis: { title: 'Count' },
      autosize: true,
      responsive: true,
    }
  };
}
