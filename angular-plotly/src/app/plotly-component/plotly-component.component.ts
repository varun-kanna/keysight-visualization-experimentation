import { Component, OnInit } from '@angular/core';
import { PlotlyService } from '../plotly.service';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plotly-component',
  standalone: true,
  // imports: [CommonModule],  // 

  templateUrl: './plotly-component.component.html',
  styleUrls: ['./plotly-component.component.scss']
})
export class PlotlyComponentComponent implements OnInit {
  constructor(private plot:PlotlyService) { }
  ngOnInit(): void {
      let x:number[] = [1,2,3,4,5];
      let y:number[] = [1,2,3,4,5];
      this.plot.plotLine("Line Chart","linePlot", x,y);

      this.plot.plotPie("Pie Chart","piePlot", ['array', 'of', 'strings', 'goes', 'here'],y);

      this.plot.plotBar("Bar Chart", "barPlot", ['array', 'of', 'strings', 'goes', 'here'],y);

    }
}
