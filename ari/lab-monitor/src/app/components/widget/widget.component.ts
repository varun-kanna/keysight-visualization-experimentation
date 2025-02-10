import { Component } from '@angular/core';
import { BarChartComponent } from '../../charts/bar-chart/bar-chart.component';
import { CommonModule } from '@angular/common'; // Import CommonModule for directives like *ngIf
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [CommonModule,NgxChartsModule,BarChartComponent],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss'
})
export class WidgetComponent {
  // can hold any type of graph.
}
