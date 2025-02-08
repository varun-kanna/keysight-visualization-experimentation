import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  standalone: true  // Standalone component
})
export class PieChartComponent implements OnInit {
  chart: any;

  ngOnInit(): void {
    this.createPieChart();
  }

  createPieChart(): void {
    this.chart = new Chart("PieChart", {
      type: 'pie',  // Pie chart type
      data: {
        labels: ['Online', 'Offline', 'Idle', 'Error',
          'No Station', 'Post Install Action Required'],  // Labels for the segments
        datasets: [{
          label: 'Stations by Status',
          data: [41,45,36,18,19,2],  // Data for each segment
          backgroundColor: ['rgb(61, 97, 138 )', 'rgb(234, 118, 31 )',
            'rgb(67, 128, 44 )', 'rgb(75, 180, 181 )', 'rgb(195, 65, 142)',
            'rgb(144, 195, 65)'],  // Segment colors
          hoverOffset: 4,  // Optional: adds a hover effect
        }]
      },
      options: {
        aspectRatio: 1.5,
        responsive: true,
        plugins: {
          title: {
            display: true,       // This will display the title
            text: 'Station Status', // The title text
            font: {
              size: 18,         // You can adjust the font size
            },
            padding: {
              bottom: 20        // Adds some space below the title
            }
          },
          legend: {
            position: 'bottom',  // Position of the legend
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,  // Custom tooltip label format
            }
          }
        }
      }
    });
  }
}