import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MathComponent } from './math/math.component';
import { SquareComponent } from './math/square/square.component';
import { CircleComponent } from './math/circle/circle.component';
import { TriangleComponent } from './math/triangle/triangle.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MathComponent,
    SquareComponent,
    CircleComponent,
    TriangleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
