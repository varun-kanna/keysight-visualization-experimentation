import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [BarChartComponent, PieChartComponent],  // Declare only chart-related components here
  imports: [
    CommonModule,
    NgxChartsModule  // Import NgxChartsModule here
  ],
  exports: [BarChartComponent, PieChartComponent]  // Export these chart components for use in other modules
})
export class ChartsModule { }
