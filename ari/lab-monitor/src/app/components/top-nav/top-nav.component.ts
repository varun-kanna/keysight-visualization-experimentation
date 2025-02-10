import { Component } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  imports: [],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {
  onButtonClick() {
    console.log("Button clicked!");
    alert("You clicked the button!");
  }
}
