import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';  // Import Chart.js (with auto-import for necessary modules)

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
  standalone: true  // Mark as a standalone component
})
export class LineChartComponent implements OnInit {
  chart: any;

  ngOnInit(): void {
    this.createLineChart();
  }

  createLineChart(): void {
    this.chart = new Chart("LineChart", {
      type: 'line',  // Chart type: line chart
      data: {
        labels: ['Test 001', 'Test 002', 'Test 003', 'Test 004', 'Test 005', 'Test 006'],  // X-Axis labels (months)
        datasets: [{
          label: 'Value',
          data: [3.4, 4, 3.7, 3.2, 4.1, 3.6],  // Data for the chart (Y-Axis values)
          fill: false,  // No fill under the line
          borderColor: 'rgb(61, 97, 138 )',
          pointBackgroundColor: 'rgb(61, 97, 138 )',
        }]
      },
      options: {
        responsive: true,  // Make the chart responsive
        maintainAspectRatio: false,  // Allow the chart to fill its container fully
        scales: {
          x: {
            title: {
              display: true,
            },
            ticks: {
              stepSize: 10,
            }
          },
          y: {
            title: {
              display: true,
            },
            beginAtZero: true,  // Start Y-axis from zero
            ticks: {
              stepSize: 1,  // Step size between ticks to force whole numbers
            }
          }
        },
        plugins: {
          title:{
            display: true,       // This will display the title
            text: 'CPK by Test Name', // The title text
            font: {
              size: 18,         // You can adjust the font size
            },
            padding: {
              bottom: 20        // Adds some space below the title
            }
          },
          legend: {
            position: 'bottom',  // Position the legend at the top
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `Value: ${tooltipItem.raw}`  // Custom tooltip format
            }
          }
        }
      }
    });
  }
}
