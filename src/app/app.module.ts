import { routing } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TabelaFilmesComponent } from './tabela-filmes/tabela-filmes.component';
import { FilmeService } from './servicos/filme.service';
import { GeneroService } from './servicos/genero.service';
import { TabelaGenerosComponent } from './genero/tabela-generos/tabela-generos.component';
import {DataTableModule,SharedModule, MultiSelectModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TabelaFilmesComponent,
    TabelaGenerosComponent,

  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    DataTableModule,
    MultiSelectModule
  ],
  providers: [
    FilmeService,
    GeneroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
