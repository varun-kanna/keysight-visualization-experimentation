import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';  // Automatically imports the necessary modules

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css'],
  standalone: true // Standalone component
})
export class DonutChartComponent implements OnInit {
  chart: any;

  ngOnInit(): void {
    this.createDonutChart();
  }

  createDonutChart(): void {
    this.chart = new Chart("DonutChart", {
      type: 'pie',  // Pie chart type (used for donut too)
      data: {
        labels: ['Total','Online', 'Offline', 'Idle', 'Error',
          'No Station', 'Post Install Action Required'],
        datasets: [{
          label: 'Stations by Status',
          data: [161, 41,45,36,18,19,2],
          backgroundColor: ['rgb(56, 54, 114 )', 'rgb(61, 97, 138 )', 'rgb(234, 118, 31 )',
            'rgb(67, 128, 44 )', 'rgb(75, 180, 181 )', 'rgb(195, 65, 142)',
            'rgb(144, 195, 65)'],
          hoverOffset: 4,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title:{
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
            position: 'bottom',  // Position the legend at the bottom
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,  // Custom tooltip format
            }
          }
        },
        cutout: '70%',  // This creates the donut effect (adjust percentage as needed)
        aspectRatio: 1,  // Adjust the aspect ratio to make it look more like a donut
      }
    });
  }
}