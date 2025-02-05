import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component'; // Import your chart component
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent, // Add this to declarations
  ],
  imports: [
    BrowserModule,
    NgxChartsModule, // Ensure ngx-charts module is imported
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
