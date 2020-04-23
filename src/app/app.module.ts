import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { FormsModule } from '@angular/forms';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { ServiciosService } from './Servicios/servicios.service';
import {MatCardModule} from '@angular/material/card';
import { PokedetallesComponent } from './components/pokedetalles/pokedetalles.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule,MatButtonModule,MatInputModule, MatSelectModule} from '@angular/material';





@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    PokeListComponent,
    PokedetallesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule, BrowserAnimationsModule, HttpClientModule,MatCardModule,MatFormFieldModule,MatButtonModule,MatInputModule,MatSelectModule
  ],
  providers: [ServiciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
