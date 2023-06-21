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

  @HostListener('click', ['$event']) 
  scrollToAnchor(sectionId:string) {
    console.log('What is in here?', sectionId)
    const sectionElement = document.getElementById(sectionId);

    if(sectionId === 'home') {
      sectionElement?.scrollTop;
    }

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // oDown() {
  //   console.log('say somethinh resume')
  //   const sectionElement = document.getElementById('resume');
    
  //   if (sectionElement) {
  //     console.log('say somethinh', sectionElement)
  //     this.renderer.setProperty(document.body, 'scrollTop', sectionElement.offsetTop);
  //   }
  // }

  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //     this.classtoggle = window.scrollY > 0;
  // }


  ngOnInit(): void {
  }

}
