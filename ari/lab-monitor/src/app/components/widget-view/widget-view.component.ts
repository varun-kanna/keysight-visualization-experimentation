import { Component } from '@angular/core';
import { BarChartComponent } from '../../charts/bar-chart/bar-chart.component';
import { CommonModule } from '@angular/common'; // Import CommonModule for directives like *ngIf
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { provideAnimations } from '@angular/platform-browser/animations'; [1, 4, 5]

@Component({
  selector: 'app-widget-view',
  standalone: true,
  imports: [CommonModule,NgxChartsModule,BarChartComponent],
  templateUrl: './widget-view.component.html',
  styleUrl: './widget-view.component.scss'
})
export class WidgetViewComponent {
}

