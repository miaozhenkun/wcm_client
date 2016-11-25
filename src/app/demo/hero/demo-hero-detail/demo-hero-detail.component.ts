import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-demo-hero-detail',
  templateUrl: './demo-hero-detail.component.html',
  styleUrls: ['./demo-hero-detail.component.css']
})
export class DemoHeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
