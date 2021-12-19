import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  constructor() {}

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  }
  ngOnInit(): void {}
}
