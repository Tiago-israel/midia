import { GeneroService } from './../servicos/genero.service';
import { FilmeService } from './../servicos/filme.service';
import { Filme } from './../dto/Filme';
import { Genero } from './../dto/Genero';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-tabela-filmes',
  templateUrl: './tabela-filmes.component.html',
  styleUrls: ['./tabela-filmes.component.css']
})
export class TabelaFilmesComponent implements OnInit {


  filmes: Filme[] = [];
  generos: Genero[] = [];
  filme: Filme = new Filme();
  filmeFiltro: any = new Filme();


  constructor(private filmeService: FilmeService, private generoService: GeneroService) {
  }

  ngOnInit() {
    this.filme.genero.id = -1;
    this.generoService.getGeneros().subscribe(generos => {
      this.generos = generos;
    });

    this.buscarFilmes();


  }

  save(): void {
    this.filmeService.post(this.filme).subscribe(
      () => {
        this.hideModal();
        this.buscarFilmes();
        this.limparInputs();
      }
    );

  }

  hideModal(): void {
    $("#myModal").modal("hide");
  }

  buscarFilmes(): void {
    this.filmeService.getFilmes()
      .subscribe(filmes => {
        this.filmes = filmes;
      });
  }

  limparInputs() : void{
    this.filme = new Filme();
  }

  excluir(idFilme: number) : void {
    this.filmeService.delete(idFilme).subscribe(
      ()=>{
        this.buscarFilmes();
      }
    );
  }


  closeModal() : void {
    this.limparInputs();
  }

  editar(filme : Filme) : void {
    this.filme.idFilme = filme.idFilme;
    this.filme.duracao = filme.duracao;
    this.filme.genero = filme.genero;
    this.filme.titulo = filme.titulo;
    $("#myModal").modal("show");
  }
}
