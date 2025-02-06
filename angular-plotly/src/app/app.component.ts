import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlotlyComponentComponent } from './plotly-component/plotly-component.component'; // Adjust path if necessary
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlotlyComponentComponent], // Add PlotlyComponent here
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-plotly';
}
