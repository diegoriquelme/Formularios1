import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../Servicios/servicios.service';
import { Router} from '@angular/router';
//import { Chart } from 'chart.js';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  //pokemon:string[] = ['Bulbasaur','Charmander','Squirtle']

  title = "app";
  chart = [];

  pokemones: any = [];



  constructor(
      private _servicio:ServiciosService, private router:Router) {  }

  ngOnInit() {
    this._servicio.pokeApi().subscribe(res =>
       {  this.pokemones = res.results; } )

  }

  goDetails(name:string): void {
    const url = `/pokedetalles/${name}`;
    this.router.navigate([url, { name }]);
  }


}






