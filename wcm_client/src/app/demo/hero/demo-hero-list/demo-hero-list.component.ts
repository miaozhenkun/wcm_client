import { Component, OnInit } from '@angular/core';
import { DemoHeroService } from '../service/demo-hero.service';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-demo-hero-list',
  templateUrl: './demo-hero-list.component.html',
  styleUrls: ['./demo-hero-list.component.css']
})
export class DemoHeroListComponent implements OnInit {

  heroes: Hero[];
  selectHero: Hero;

  constructor(private heroService: DemoHeroService) {
    this.heroService.getHeroesDelay().then(
      heroes => this.heroes = heroes
    );

    this.heroes = [];
    this.selectHero = new Hero();
  }

  ngOnInit() {
  }

}
