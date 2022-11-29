import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  classtoggle = false;
  @ViewChild('profileCard')
  elementRef!: ElementRef;
  constructor(private renderer: Renderer2, private viewporter: ViewportScroller) { }

  @HostListener('document:scroll', ['$event']) 
  onScroll($event: Event) {

    let value = this.viewporter.getScrollPosition();
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
      this.classtoggle = true;
    } else {
      this.classtoggle = false;
    }
  }

  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //     this.classtoggle = window.scrollY > 0;
  // }


  ngOnInit(): void {
  }

}
