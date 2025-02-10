import { Component } from '@angular/core';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { FilterNavComponent } from './components/filter-nav/filter-nav.component';
import { WidgetViewComponent } from './components/widget-view/widget-view.component';

@Component({
  selector: 'app-root',
  imports: [TopNavComponent, DashboardNavComponent,
    FilterNavComponent, WidgetViewComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lab-monitor';
}

