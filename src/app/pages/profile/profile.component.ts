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

    if( $event.target.scrollTop >= 110 ) {
      console.log('DO ANIMATION')
      this.doAnimation = true;

    } else {

      console.log('what does this say DOPNT ANIMATE')
      this.doAnimation = false;
    }
  }

  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //     this.classtoggle = window.scrollY > 0;
  // }


  ngOnInit(): void {
  }

}
