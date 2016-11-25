import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="col-xs-3 placeholder demo-left cs-cursor">
      <div class="demo-left-item"
        [routerLink]="['hero']"
        routerLinkActive="active">
        <img class="card-img-top" src="assets/imgs/heroes/yingxiongsha.jpg" alt="英雄杀">
        <div class="text">
          <h4>英雄杀</h4>
          <p>桌游</p>
        </div>
      </div>
      <div class="demo-left-item"
        [routerLink]="['hero-sanguo']"
        routerLinkActive="active">
        <img class="card-img-top" src="assets/imgs/heroes/yingxiongsha.jpg" alt="三国杀">
        <div class="text">
          <h4>三国杀</h4>
          <p>桌游</p>
        </div>
      </div>
    </div>

    <div class="col-xs-9 placeholder demo-hero-index-item">
       <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .demo-left{
      border-right: 2px solid #eee;
      text-align: center;
      cursor: pointer;
    }
    .demo-left-item {
      margin: 5px;
      padding: 5px;
    }
    .demo-left-item.active{border-left: 2px solid #5F5151}
    .demo-left-item img{
      width: 100%;
      height: 100%;
    }
  `]
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
