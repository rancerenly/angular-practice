export interface Figure {
  title: string;
  area: number;
  perimeter: number;
}

export class Square implements Figure {
  title!: string;
  area!: number;
  perimeter!: number;
  a_side!: number;
  b_side!: number;
}
export class Circle implements Figure {
  title!: string;
  area!: number;
  perimeter!: number;
  raduis!: number;
}


