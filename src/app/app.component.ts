import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tony-portfolio';
  public showToggle = false;
  constructor(private router: Router){}

  ngOnInit() {
    // this.activated.params.subscribe((param: any) => {
    //   console.log(param);
    //   this.showToggle = !this.showToggle

  }

  hasRoute(route:string) {
    console.log('the route ', route);
    return this.router.url.includes(route);
  }
}
