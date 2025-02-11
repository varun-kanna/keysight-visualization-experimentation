import { Component } from '@angular/core';
import { BarChartComponent } from '../../charts/bar-chart/bar-chart.component';
import { CommonModule } from '@angular/common'; // Import CommonModule for directives like *ngIf
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartHorizontalComponent } from '../../charts/bar-chart-horizontal/bar-chart-horizontal.component';
import { PieChartComponent } from '../../charts/pie-chart/pie-chart.component';

@Component({
  selector: 'app-widget',
  standalone: true,
  // add new component to import array 
  imports: [CommonModule,NgxChartsModule,BarChartComponent,
    BarChartHorizontalComponent, PieChartComponent],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss'
})
export class WidgetComponent {
  // can hold any type of graph.
}
