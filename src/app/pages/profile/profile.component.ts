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
    // console.log('SHOULD BE THE PERCENTAGE ', percentageBe);
    
    // console.log('SHOULD BE window.innerHeight ',$event.target.innerHeight);
    console.log('SHOULD BE scrollTop value', String(percentageBe.toFixed(2)),'%') ;

    
    if( $event.target.scrollTop >= 110 ) {
      // console.log('window height', heightOfWindow);
      // console.log('content scrolled', contentScrolled)
      console.log('DO ANIMATION')
      this.doAnimation = true;

    } else {

      console.log('what does this say DOPNT ANIMATE')
      this.doAnimation = false;
    }
  }

  // updateScrollPercentage = function() { 
  //   const heightOfWindow = window.innerHeight,
  //     contentScrolled = window.pageYOffset,
  //     bodyHeight = document.body.offsetHeight,
  //     percentage = document.querySelector("[data-scrollPercentage] .percentage"),
  //     percentageVal = document.querySelector("#percentage-value")

  //   if(bodyHeight - contentScrolled <= heightOfWindow) {
  //     percentageVal.textContent = percentage.style.width = "100%"
  //   }
  //   else {
  //     const total = bodyHeight - heightOfWindow,
  //       got = contentScrolled,
  //       percent = parseInt((got/total) * 100)
  //     percentageVal.textContent = percentage.style.width = percent + "%"
  //   }
  // }

  // window.addEventListener('scroll', updateScrollPercentage)
  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //     this.classtoggle = window.scrollY > 0;
  // }


  ngOnInit(): void {
  }

}
