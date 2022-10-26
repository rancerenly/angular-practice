import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootsService {



  constructor() { }

  calculateRoots(a: number, b: number, c: number) {
    const d = b * b - 4 * a * c;
    let x1, x2;
    if (d < 0) {
      x1 = Math.sqrt( -d ) / ( 2 * a );
      x2 =- Math.sqrt( -d ) / ( 2 * a );
    }
    else {
      if ( d == 0 ) {
        x1 = x2 = -b / ( 2 * a );
      }
      else {
        x1 = -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a );
        x2 = -b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a );
      }
    }
    return {x1,x2};
  }
}
