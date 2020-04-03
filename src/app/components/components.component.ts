import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  constructor() { }
  texto: string;

  haceMayusculas(){
    this.texto = this.texto.toLocaleUpperCase();
  }

  hacerMinusculas() {
    this.texto = this.texto.toLocaleLowerCase();
  }


  ngOnInit() {
  }

}
