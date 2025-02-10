// import { Component, OnInit } from '@angular/core';
// import { PlotlyService } from '../plotly.service';
// // import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-plotly-component',
//   standalone: true,
//   // imports: [CommonModule],  // 

//   templateUrl: './plotly-component.component.html',
//   styleUrls: ['./plotly-component.component.scss']
// })
// export class PlotlyComponentComponent implements OnInit {
//   constructor(private plot:PlotlyService) { }
//   ngOnInit(): void {
//       let x:number[] = [1,2,3,4,5];
//       let y:number[] = [1,2,3,4,5];
//       this.plot.plotLine("Line Chart","linePlot", x,y);

//       this.plot.plotPie("Pie Chart","piePlot", ['array', 'of', 'strings', 'goes', 'here'],y);

//       this.plot.plotBar("Bar Chart", "barPlot", ['array', 'of', 'strings', 'goes', 'here'],y);

//     }
// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add this
import { PlotlyService } from '../plotly.service';
import { InfluxDBService } from '../services/influxdb.service';

@Component({
  selector: 'app-plotly-component',
  standalone: true,
  imports: [CommonModule], // Import CommonModule
  templateUrl: './plotly-component.component.html',
  styleUrls: ['./plotly-component.component.scss']
})
export class PlotlyComponentComponent implements OnInit {
  constructor(private plot: PlotlyService, private influxDB: InfluxDBService) {}

  async ngOnInit(): Promise<void> {
    const fluxQuery = `
      from(bucket: "TimeSeriesDataVisualization")
        |> range(start: -1h)
        |> filter(fn: (r) => r._measurement == "temperature") 
        |> filter(fn: (r) => r._field == "value")
    `;

    try {
      const data = await this.influxDB.fetchData(fluxQuery);
      const x = data.map((d: any) => d.time); // Fix implicit 'any' error
      const y = data.map((d: any) => d.value);

      this.plot.plotLine("InfluxDB Data", "plot", x, y);
    } catch (error) {
      console.error("Failed to load InfluxDB data:", error);
    }
  }
}
