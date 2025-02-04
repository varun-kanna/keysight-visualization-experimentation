import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  basicData: any;
  donutData: any;
  mixedData: any;
  basicOptions: any;
  stackedOptions: any;

  ngOnInit() {
    this.basicData = {
      // Y-axis label
      labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
      datasets: [
        {
          label: 'First Dataset',
          data: [10, 20, 30, 40, 12],

          // Putting this inside each dataset allows each to have unique colors while
          // putting it in the basicOtions allows all to share the color
          // backgroundColor: ['red', 'blue', 'green', 'purple', 'orange'],
          // borderColor: ['gray'],
          // borderWidth: 1,
        },
        // {
        //   label: 'Second Dataset',
        //   data: [1, 2, 3, 14, 12],
        // }
      ]
    };
    this.donutData = {
      labels: ["Error", "Warning", "Online", "Wait", "Active", "Idle/Offline"],
      datasets: [
        {
          label: "Overall Status",
          backgroundColor: ["magenta", "yellow", "green", "skyblue", "purple", "salmon"],
          data: [8, 26, 54, 22, 11, 40] // Single dataset containing all values
        }
      ]
    };
    
    this.mixedData = {
      // Y-axis label
      labels: ['India', 'USA', 'Japan'],
      datasets: [
        // {
        //   label: 'First Dataset',
        //   data: [10, 20, 30, 40, 12],

        //   // Putting this inside each dataset allows each to have unique colors while
        //   // putting it in the basicOtions allows all to share the color
        //   // backgroundColor: ['red', 'blue', 'green', 'purple', 'orange'],
        //   // borderColor: ['gray'],
        //   // borderWidth: 1,
        // },
        // {
        //   label: 'Second Dataset',
        //   data: [5, 12, 17, 22, 4],
      // }
        { 
            label: "Error", 
            backgroundColor: "magenta", 
            // India, USA, Japan
            data: [3, 2, 3] 
        }, 
        { 
            label: "Warning", 
            backgroundColor: "yellow", 
            data: [17, 10, 5] 
        }, 
        { 
            label: "Online", 
            backgroundColor: "green", 
            data: [10, 23, 21] 
        }, 
        { 
            label: "Wait", 
            backgroundColor: "skyblue", 
            data: [9, 6, 7] 
        },
        { 
          label: "Active", 
          backgroundColor: "purple", 
          data: [6, 2, 5] 
        },
        { 
          label: "Idle/Offline", 
          backgroundColor: "salmon", 
          data: [10, 15, 13] 
        },
      ]
    };
    this.basicOptions = {
      // Allows us to switch what access the top labels are (Q1, Q2,..., Q5 in this case)
      // indexAxis: 'y',
      elements: {
        bar: {
          backgroundColor: ['red', 'blue', 'green', 'purple', 'orange'],
          // Need to add border width to make viewable
          borderColor: ['gray'],
          borderWidth: 1,
        },
        doughnut:{
          // backgroundColor: ['red', 'blue', 'green', 'purple', 'orange'],
          // borderColor: ['gray'],
          // borderWidth: 1,
        },

      }
    };
    // Adjusted from https://www.geeksforgeeks.org/angular-primeng-barchart-stacked/
    this.stackedOptions = {
      indexAxis: 'y',
      plugins: {
        legend: {
          display: true,
          position: 'top',
        }
      },
      responsive: true,
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      }
    };
    
  }

  selectData(event: any) {
    console.log(event);
  }
}
