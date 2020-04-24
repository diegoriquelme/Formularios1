import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiciosService} from '../../Servicios/servicios.service';
import {MatTableModule} from '@angular/material/table';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pokedetalles',
  templateUrl: './pokedetalles.component.html',
  styleUrls: ['./pokedetalles.component.css']
})
export class PokedetallesComponent implements OnInit {



  pokeinfo = {name:""};



  constructor(
    private _servicio:ServiciosService,
    private router: Router,
    private route: ActivatedRoute,

    //private location: Location,

  ) { }


  ngOnInit() {
    this.getPokemon();

  }

  getPokemon() {
    this.route.params.subscribe(res => {
      this._servicio.pokeDetails(res.name).subscribe(pokeDetails =>{
        console.log(pokeDetails)
        this.pokeinfo = pokeDetails;
      })
    });

}
}

