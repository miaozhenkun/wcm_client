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
  gethttp(){
  	 $.ajax({
		          type : "get",
		           url :"http://apis.juhe.cn/cook/query.php?&key=b2ceeb44f45041de2ed08995a63b5ab0&menu=肉&callback=?", 
		           dataType : "json",
		           jsonp: "callbackparam",
		           jsonpCallback:"jsonpCallback1",
		          success : function(data){
		              console.log(data);      
		         },
		          error:function(e){
		               console.log(e);
		         }
		     });
  }
  search(term: string): Observable<Hero[]> {
    return this.http
               .get(`app/heroes/?name=${term}`)
               .map((r: Response) => r.json().data as Hero[]);
  }

}
