import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AnguTest';
  yPosAsInt: any = 0;

  constructor() {
    for (let indx = 0; indx < 10; indx++) {
      let yPosAsInt = 95 + indx;
      console.log(indx);
    }
  }

  yPos = String (this.yPosAsInt);
}
