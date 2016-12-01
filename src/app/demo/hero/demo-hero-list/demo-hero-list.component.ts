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
  	public maxSize:number = 5;
	public itemsPerPage:number=5;
	public totalItems:number = 15;
	public currentPage:number = 1;

	public firstText:string="首页";
	public lastText:string="尾页";
	public previousText:string="上一页";
	public nextText:string="下一页";
  	constructor(private heroService: DemoHeroService) {
  		this.heroService.gethttp();
    this.heroService.getHeroesDelay().then(
      heroes => this.heroes = heroes
    );

    this.heroes = [];
    this.selectHero = new Hero();
    
  }
	public setPage(pageNo:number):void {

	};
	 
	public pageChanged(event:any):void {
		console.log(event);
		
	};
  ngOnInit() {
  }
  
}
