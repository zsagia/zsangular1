import { Component } from '@angular/core';
import { HeroesComponent } from 'hero.component';

@Component({
     selector: 'my-app',
     template: `
        <h1>{{title}}</h1>
        <my-heroes>
     `
})

export class AppComponent {
     title = 'Tour of Heroes';
}