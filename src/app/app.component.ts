import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tony-portfolio';
  public showToggle = false;
  constructor(private activated: ActivatedRoute){}

  ngOnInit() {
    this.activated.params.subscribe((param: any) => {
      console.log(param);
      this.showToggle = !this.showToggle;
      
    })
  }
}
