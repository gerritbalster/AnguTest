import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-leave',
  templateUrl: './enter-leave.component.html',
  styleUrls: ['./enter-leave.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [ // Alias für 'void => *'
        style({ transform: 'translateX(-100%)' }),
        animate(3000)
      ])/*,
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])*/
    ])
  ]
})
export class EnterLeaveComponent implements OnInit {

  numbers = [1,2,3,4,5,6,7,9,10];

  constructor() { }

  ngOnInit() {
  }

  add() {
    for(let i=1;i<=10;i++)
      this.numbers.push(Math.random());
  }
}
