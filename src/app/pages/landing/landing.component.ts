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
    // this.hideBtn = false;
    // this.router.navigate(['/work']);
    // setTimeout(() => {
      
    // }, 3000);
  }



}
function output() {
  throw new Error('Function not implemented.');
}

