import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
  standalone: true  // Add standalone: true here
})
export class BarChartComponent implements OnInit {
  chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: ['India', 'US', 'Japan'],
        datasets: [
          {
            label: "Count",
            data: [41, 45, 36],
            backgroundColor: 'rgb(61, 97, 138 )'
          }
        ]
      },
      options: {
        aspectRatio: 1.5,
        responsive: true,
        plugins: {
          legend: {  // Configure the legend plugin
            position: 'bottom',  // Set the position to bottom
          },
          title: {
            display: true,       // This will display the title
            text: 'Station Location', // The title text
            font: {
              size: 18,         // You can adjust the font size
            },
          
            padding: {
              bottom: 20        // Adds some space below the title
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: 50,
            ticks: {
              stepSize: 10,
              padding: 10
            },
            // grid: {
            //   drawBorder: false
            // }
          }
        }
      }
    });
  }
  
  
}
