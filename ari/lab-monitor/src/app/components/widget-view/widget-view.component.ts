import { Component } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';
@Component({
  selector: 'app-widget-view',
  standalone: true,
  imports: [WidgetComponent],
  templateUrl: './widget-view.component.html',
  styleUrl: './widget-view.component.scss'
})
export class WidgetViewComponent {
  //dynamically display array of Widget Components
}

