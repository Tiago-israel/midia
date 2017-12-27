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
  busca: any;
  idFilme : number;

  confirmarExclusao(id : number) : void{
    this.idFilme = id;
    $("#excluir").modal("show");
  }


  constructor(private filmeService: FilmeService, private generoService: GeneroService) {
  }

  ngOnInit() {
    this.carregarGeneros();
    this.buscarFilmes();
  }

  carregarGeneros(): void {
    this.filme.genero.id = -1;
    this.generoService.getGeneros().subscribe(generos => {
      this.generos = generos;
    });
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

  limparInputs(): void {
    this.filme = new Filme();
  }

  excluir(): void {
    this.filmeService.delete(this.idFilme).subscribe(
      () => {
        this.buscarFilmes();
        $("#excluir").modal("hide");
      }
    );
  }

  buscarPorTitulo(): void {
    console.log(this.busca);
    debugger;
    if(this.busca != undefined && this.busca.trim() == ""){
      this.busca = undefined;
    }else if(this.busca != undefined){
      this.busca = this.busca.trim();
    }
    
    
    
    this.filmeService.getByTitulo(this.busca).subscribe(
      filmes => {
        this.filmes = filmes;
      }
    );

  }

  closeModal(): void {
    this.limparInputs();
  }



  editar(filme: Filme): void {
   this.filmeService.get(filme.idFilme).subscribe(
      filme => {
        this.filme = filme;
      }
   );
    $("#myModal").modal("show");
  }

  
}
