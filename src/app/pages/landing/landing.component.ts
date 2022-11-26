import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class Landingomponent implements OnInit {
  public hideBtn = true;
  @Output() buttonPressed = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  mainNav() {
    this.buttonPressed.emit(true);
  }



}
function output() {
  throw new Error('Function not implemented.');
}

