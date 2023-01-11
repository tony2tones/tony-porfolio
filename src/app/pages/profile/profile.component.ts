import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  classtoggle = false;
  doAnimation = false;
  @ViewChild('profileCard')
  elementRef!: ElementRef;
  constructor(private renderer: Renderer2, private viewporter: ViewportScroller) { }

  @HostListener('document:scroll', ['$event']) 
  onScroll($event: any) {
    const heightOfWindow = window.innerHeight,
    contentScrolled = window.pageYOffset,
    bodyHeight = document.body.offsetHeight

    let percentageBe = ($event.srcElement.scrollTop*100)/552.5;
    console.log('SHOULD BE scrollTop value', String(percentageBe.toFixed(2)),'%') ;

    
    if( $event.target.scrollTop >= 110 ) {
      this.doAnimation = true;

    } else {

      console.log('what does this say DOPNT ANIMATE')
      this.doAnimation = false;
    }
  }


  ngOnInit(): void {
  }

}
