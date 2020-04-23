import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PokedetallesComponent } from './components/pokedetalles/pokedetalles.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';


const routes: Routes = [

  {path: 'poke-list', component: PokeListComponent },
  {path: 'pokedetalles/:name', component: PokedetallesComponent },
  {path: '',   redirectTo: '/poke-list', pathMatch: 'full' },
  {path: '**', redirectTo: '/poke-list' }
  // ultimos 2 componentes reireccionan
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
