import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component'; // Import BarChartComponent
import { PieChartComponent } from './pie-chart/pie-chart.component'; // Import your pie chart
import { DonutChartComponent } from './donut-chart/donut-chart.component'; // Import the donut chart component
import { LineChartComponent } from './line-chart/line-chart.component';
import { LayeredBarChartComponent } from './layered-bar-chart/layered-bar-chart.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Mark it as standalone
  imports: [BarChartComponent, PieChartComponent,
    DonutChartComponent, LineChartComponent,
    LayeredBarChartComponent, RouterOutlet]  // Include BarChartComponent here
})
export class AppComponent {
  title = 'my-angular-app';
}
