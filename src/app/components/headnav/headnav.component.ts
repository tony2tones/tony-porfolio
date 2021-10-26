import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-headnav',
  templateUrl: './headnav.component.html',
  styleUrls: ['./headnav.component.css']
})
export class HeadnavComponent implements OnInit {
  title = 'tony-portfolio';
  public showToggle = false;
  constructor(private activated: ActivatedRoute){}

  ngOnInit() {
    this.activated.params.subscribe((param: any) => {
      console.log(param);
      if(param === {}) {
      this.showToggle = !this.showToggle;
      }
    })
  }
}
