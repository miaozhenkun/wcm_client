/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DemoHeroService } from './demo-hero.service';

describe('DemoHeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemoHeroService]
    });
  });

  it('should ...', inject([DemoHeroService], (service: DemoHeroService) => {
    expect(service).toBeTruthy();
  }));
});
