import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class Landingomponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  mainNav() {
    this.router.navigate(['/work']);
  }



}
