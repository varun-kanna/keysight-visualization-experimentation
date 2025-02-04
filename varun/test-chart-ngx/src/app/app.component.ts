import { Component } from '@angular/core';
import { TestRunsChartComponent } from './components/test-chart-ngx/test-chart-ngx.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestRunsChartComponent],
  template: `
    <div class="container">
      <h1>Test Runs Analysis</h1>
      <app-test-runs-chart></app-test-runs-chart>
    </div>
  `,
  styles: [
    `
      .container {
        padding: 20px;
      }
    `,
  ],
})
export class AppComponent {}
