import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style ({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: '#c6ecff'
      })),
      transition('open => closed', [
        animate('2s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})

export class OpenCloseComponent implements OnInit {
  
  isOpen = true;

  constructor() {
  }
  
  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
