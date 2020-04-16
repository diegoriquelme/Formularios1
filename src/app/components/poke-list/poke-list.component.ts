import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../Servicios/servicios.service';
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
      private _servicio:ServiciosService) { }

  ngOnInit() {
    this._servicio.pokeApi().subscribe(res =>
       {  this.pokemones = res.results; } )

  }

/*   goDetails(product): void {
    const url = `/products/${product.code}`;
    this.router.navigate([url, { ...product }]);
  } */


}






