import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dokumentenspeicher';
  constructor() {
  }

  logValue (value) {
    console.log ("value = " + value);
  }
}
