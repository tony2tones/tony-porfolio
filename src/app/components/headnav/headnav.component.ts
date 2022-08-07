import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-headnav',
  templateUrl: './headnav.component.html',
  styleUrls: ['./headnav.component.scss']
})
export class HeadnavComponent {
  title = 'tony-portfolio';

  constructor(private router: Router) { }

  profile() {
    this.router.navigate(['/profile']);
  }

  myScroll() {
    console.log('SOMETHING HAPPENED');
  }


}
