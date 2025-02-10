import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-nav',
  imports: [],
  templateUrl: './dashboard-nav.component.html',
  styleUrl: './dashboard-nav.component.scss',
})
export class DashboardNavComponent {
  navItems: string[] = ['Assets', 'Station Utilization', 'Campaigns'];
}
