import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'Angular Test';
  constructor() {
  }

  logValue (value) {
    console.log ("value = " + value);
  }
}
