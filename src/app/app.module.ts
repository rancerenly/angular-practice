import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MathComponent } from './math/math.component';
import { SquareComponent } from './math/square/square.component';
import { CircleComponent } from './math/circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    MathComponent,
    SquareComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
