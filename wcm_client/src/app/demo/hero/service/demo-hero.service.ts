import { Injectable } from '@angular/core';
import { HEROES } from '../mock/mock-heroes';
import { Hero } from '../model/hero';

@Injectable()
export class DemoHeroService {

  constructor() { }

  getHeros(){
    return HEROES;
  }

  // 模拟延迟请求
  getHeroesDelay() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(()=>resolve(HEROES), 1000) // 1 seconds
    );
  }

}
