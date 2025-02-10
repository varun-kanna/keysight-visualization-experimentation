import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

interface StationData {
  station: string; // Station name
  metric: string; // Metric category
  time: string; // UTC timestamp
  value: number; // Available time (decimal)
}

interface ChartData {
  name: string;
  value: number;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  template: `
    <div class="container mx-4 my-4">
      <h1 class="text-2xl font-bold mb-4">Station Available Time Data</h1>

      <div *ngIf="loading" class="text-gray-600">Loading station data...</div>

      <div
        *ngIf="error"
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
      >
        {{ error }}
      </div>

      <ngx-charts-bar-vertical
        [results]="stationData"
        [xAxis]="true"
        [yAxis]="true"
        [legend]="false"
        [showDataLabel]="true"
        [scheme]="'cool'"
        [animations]="true"
      >
      </ngx-charts-bar-vertical>
    </div>
  `,
})
export class AppComponent implements OnInit {
  stationData: ChartData[] = []; // Correct type
  loading: boolean = true;
  error: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchStationData();
  }

  fetchStationData() {
    this.http.get<{ data: StationData[] }>('/api/station-data').subscribe({
      next: (response) => {
        console.log('Raw API Response:', response.data);

        // Group data by metric and compute averages
        const metricMap: { [key: string]: { sum: number; count: number } } = {};

        response.data.forEach((item) => {
          const metric = item.metric;
          if (!metricMap[metric]) {
            metricMap[metric] = { sum: 0, count: 0 };
          }
          metricMap[metric].sum += item.value;
          metricMap[metric].count += 1;
        });

        // Convert metric map to ngx-charts format
        this.stationData = Object.keys(metricMap).map((metric) => ({
          name: metric, // X-axis labels
          value: metricMap[metric].sum / metricMap[metric].count, // Average value
        }));

        this.loading = false;
        console.log('Formatted Data for Chart:', this.stationData);
      },
      error: (error) => {
        this.error = 'Could not fetch station data: ' + error.message;
        this.loading = false;
        console.error('Station data error:', error);
      },
    });
  }
}
