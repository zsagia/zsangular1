import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';

import { AppComponent }   from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }