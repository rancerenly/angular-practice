import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MathComponent } from './math/math.component';
import { AppComponent } from './app.component';
import { SquareComponent } from './math/square/square.component';
import { CircleComponent } from './math/circle/circle.component';
import { TriangleComponent } from './math/triangle/triangle.component';
import { HomeComponent } from './home/home.component';
import { SquareRootsComponent } from './math/square-roots/square-roots.component';

const routes: Routes = [
  { path:'', component: HomeComponent, children: [
      { path: 'math', component: MathComponent, children: [
          {
            path: 'square',
            component: SquareComponent
          },
          {
            path: 'circle',
            component: CircleComponent
          },
          {
            path: 'triangle',
            component: TriangleComponent
          },
          {
            path: 'square-roots',
            component: SquareRootsComponent
          }
        ]
      }
    ]
  },
  { path: '**', component: AppComponent  }
];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
