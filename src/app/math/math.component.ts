import { Component, OnInit } from '@angular/core';
import { SimpleCalculatorService } from '../simple-calculator.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {

  constructor(public simpleCalculatorService: SimpleCalculatorService) { }

  ngOnInit(): void {
  }

}
