import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private _http:HttpClient) { }

pokeApi():any{
    const urlAPI=`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964`;
    return this._http.get(urlAPI);
}


pokeDetails(pokename):any{
const url=`https://pokeapi.co/api/v2/pokemon/${pokename}/`;
return this._http.get(url);
}


}
