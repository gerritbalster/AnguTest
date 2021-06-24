import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-leave',
  templateUrl: './enter-leave.component.html',
  styleUrls: ['./enter-leave.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(35%)' })),     // Text ab 35% der Fensterbreite positionieren
      state('out', style({ transform: 'translateX(-100%)' })),  // Text komplett 'herausfahren'
      transition(':enter', [                                    // Alias für 'void => in'
        style({ transform: 'translateX(-100%)' }),              // Text ist zu Beginn der Bewegung ausserhalb des Fenster (void)
        animate(3000)                                           // Den Übergang von void => in animieren
      ]),
      transition('in <=> out', animate(3000))                   // state-Wechsel in beiden Richtungen animieren
    ])
  ]
})
export class EnterLeaveComponent implements OnInit {

  leave : boolean = false;

  constructor() {}

  ngOnInit() {}

  leaveClicked() {
    this.leave = true;
  }
}
