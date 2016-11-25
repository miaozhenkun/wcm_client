import { Component, OnInit } from '@angular/core';

@Component({
  template:  `
    <h1>hero</h1>
    <router-outlet></router-outlet>
  `
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
