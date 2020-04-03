import { Component, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/MatBadgeModule';
@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  pokemon:string[] = ['Bulbasaur','Charmander','Squirtle']


  constructor() { }

  ngOnInit() {
  }

}
