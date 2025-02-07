import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotlyModule } from 'angular-plotly.js';
import PlotlyJS from 'plotly.js-dist-min';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-graph1',
  imports: [CommonModule, PlotlyModule],
  templateUrl: './graph1.component.html',
  styleUrl: './graph1.component.scss'
})
export class Graph1Component {
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
      yaxis: { title: 'Count' }
    }
  };
}
