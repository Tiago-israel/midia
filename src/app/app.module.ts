import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TabelaFilmesComponent } from './tabela-filmes/tabela-filmes.component';
import { FilmeService } from './servicos/filme.service';
import { GeneroService } from './servicos/genero.service';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TabelaFilmesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    FilmeService,
    GeneroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
