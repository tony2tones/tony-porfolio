import { Component, EventEmitter, Output } from '@angular/core';
import { ViewportScroller } from '@angular/common';

import {  Router } from '@angular/router';

@Component({
  selector: 'app-headnav',
  templateUrl: './headnav.component.html',
  styleUrls: ['./headnav.component.scss']
})
export class HeadnavComponent {
  title = 'tony-portfolio';
  @Output() messageBus = new EventEmitter<string>();
  constructor(private router: Router) { }

  goDown() {
    console.log('is this happening? ')
    this.messageBus.emit('twoTESTING');
  }



}
