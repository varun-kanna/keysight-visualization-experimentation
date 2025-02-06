import { Injectable } from '@angular/core';
declare const Plotly: any;

@Injectable({
  providedIn: 'root'
})
export class PlotlyService {
  constructor() {}

  plotLine(title: string, divId: string, x: number[], y: number[]) {
    let trace = {
      x: x,
      y: y,
      mode: 'lines',
      type: 'scatter'
    };

    let layout = { title: title };
    Plotly.newPlot(divId, [trace], layout);
  }

  plotBar(title: string, divId: string, x: string[], y: number[]) {
    let trace = {
      x: x,
      y: y,
      type: 'bar'
    };

    let layout = { title: title };
    Plotly.newPlot(divId, [trace], layout);
  }

  plotPie(title: string, divId: string, labels: string[], values: number[]) {
    let trace = {
      labels: labels,
      values: values,
      type: 'pie'
    };

    let layout = { title: title };
    Plotly.newPlot(divId, [trace], layout);
  }
}
