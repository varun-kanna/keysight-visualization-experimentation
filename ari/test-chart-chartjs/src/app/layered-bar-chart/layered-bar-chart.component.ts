import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';  // Import Chart.js (with auto-import for necessary modules)

@Component({
  selector: 'app-layered-bar-chart',
  templateUrl: './layered-bar-chart.component.html',
  styleUrls: ['./layered-bar-chart.component.css'],
  standalone: true  // Mark as a standalone component
})
export class LayeredBarChartComponent implements OnInit {
  chart: any;

  ngOnInit(): void {
    this.createLayeredBarChart();
  }

  createLayeredBarChart(): void {
    this.chart = new Chart("LayeredBarChart", {
      type: 'bar',  // Set the chart type to 'bar'
      data: {
        labels: ['May', 'June', 'July', 'August'],  // X-Axis labels
        datasets: [
          {
            label: 'Available Time',
            data: [240, 350, 430, 280],  // Y-Axis data points for Dataset 1
            backgroundColor: 'rgb(61, 97, 138 )',  // Color for Dataset 1
            stack: 'stack1',  // Stack group for this dataset
          },
          {
            label: 'Planned Down Time',
            data: [720, 550, 640, 810],  // Y-Axis data points for Dataset 2
            backgroundColor: 'rgb(234, 118, 31 )',  // Color for Dataset 2
            stack: 'stack1',  // Stack group for this dataset
          },
          {
            label: 'Down Time',
            data: [50, 40, 70, 80],  // Y-Axis data points for Dataset 3
            backgroundColor: 'rgb(67, 128, 44 )',  // Color for Dataset 3
            stack: 'stack1',  // Stack group for this dataset
          },
          {
            label: 'Utilization Time',
            data: [180, 260, 400, 250],  // Y-Axis data points for Dataset 3
            backgroundColor: 'rgb(75, 180, 180)',  // Color for Dataset 3
            stack: 'stack1',  // Stack group for this dataset
          },
        ]
      },
      options: {
        responsive: true,  // Make the chart responsive
        maintainAspectRatio: false,  // Allow the chart to fill its container fully
        scales: {
          x: {
            title: {
              display: true,
              text: 'Categories'
            },
          },
          y: {
            title: {
              display: true,
              text: 'Values'
            },
            beginAtZero: true,  // Start Y-axis from zero
            stacked: true,  // Enable stacking for the Y-axis
          }
        },
        plugins: {
          title: {
            display: true,  // This will display the title
            text: 'Availability by Station/Instrument',  // The title text
            font: {
              size: 18,         // Font size of the title
            },
            padding: {
              bottom: 20        // Adds some space below the title
            }
          },
          legend: {
            position: 'bottom',  // Position the legend at the bottom
          },
        },
        
      }
    });
  }
}
