import {
    Directive,
    HostListener,
    ElementRef,
    Input,
  } from '@angular/core';
  import { Renderer2 } from '@angular/core';
  
  @Directive({
    selector: '[appScroll]',
  })
  export class ScrollDirective {
    @Input() scrollClass: string = '';
  
    constructor(private el: ElementRef, private renderer: Renderer2) {}
  
    @HostListener('scroll', [])
    onScroll() {
      if (this.el.nativeElement.scrollTop > 20) {
        this.renderer.addClass(this.el.nativeElement, this.scrollClass);
      } else if (this.el.nativeElement.scrollTop < 40) {
        this.renderer.removeClass(this.el.nativeElement, this.scrollClass);
      }
    }
  }
  