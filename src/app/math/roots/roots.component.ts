import { Component, OnInit } from '@angular/core';
import { RootsService } from './roots.service';

@Component({
  selector: 'app-roots',
  templateUrl: './roots.component.html',
  styleUrls: ['./roots.component.scss']
})
export class RootsComponent implements OnInit {

  a: number = 0;
  b: number = 0;
  c: number = 0;

  rootsArray = {
    x1: 0,
    x2: 0
  };


  constructor(public roots: RootsService) { }

  ngOnInit(): void {
  }

  getRoots() {
    this.rootsArray = this.roots.calculateRoots(this.a,this.b,this.c);
  }

}
