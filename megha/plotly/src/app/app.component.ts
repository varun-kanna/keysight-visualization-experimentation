import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { barGraphComponent } from './barGraph/barGraph.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, barGraphComponent, PieChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'megha';
}
