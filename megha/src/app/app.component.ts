import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Graph1Component } from './graph1/graph1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Graph1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'megha';
}
