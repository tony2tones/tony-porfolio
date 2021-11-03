import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-headnav',
  templateUrl: './headnav.component.html',
  styleUrls: ['./headnav.component.css']
})
export class HeadnavComponent {
  title = 'tony-portfolio';

  constructor(private router: Router) { }

  profile() {
    this.router.navigate(['/profile']);
  }


}
