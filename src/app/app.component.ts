import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tony-portfolio';
  public showToggle = false;
  public hideLanging = false;
  constructor(private router: Router){}

  ngOnInit() {
    // this.activated.params.subscribe((param: any) => {
    //   console.log(param);
    //   this.showToggle = !this.showToggle

  }

  hasRoute(route:string) {
    return this.router.url.includes(route);
  }

  uiUpdate($event:boolean) {
    this.hideLanging = $event;
  }

}
