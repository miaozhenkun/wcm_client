import { Component, OnInit } from '@angular/core';

@Component({
  template:  `
    <h1>demo</h1>
    <router-outlet></router-outlet>
  `
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
