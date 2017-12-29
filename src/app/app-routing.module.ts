import { TabelaGenerosComponent } from './genero/tabela-generos/tabela-generos.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TabelaFilmesComponent } from './tabela-filmes/tabela-filmes.component';

const routes : Routes = [
    {path: '', component: TabelaFilmesComponent },
    {path: 'generos', component: TabelaGenerosComponent },
    {path: 'filmes', component: TabelaFilmesComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);