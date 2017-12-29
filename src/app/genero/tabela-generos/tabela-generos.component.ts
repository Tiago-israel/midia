import { GeneroService } from './../../servicos/genero.service';
import { Genero } from './../../dto/Genero';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-tabela-generos',
  templateUrl: './tabela-generos.component.html',
  styleUrls: ['./tabela-generos.component.css']
})
export class TabelaGenerosComponent implements OnInit {



  generos: Genero[] = [];
  genero: Genero = new Genero();

  constructor(private generoService: GeneroService) {

  }

  ngOnInit() {
    this.buscarTodos();
  }

  onSubmit(form): void {
    this.save();
    this.hideModal();

  }

  save(): void {
    this.generoService.post(this.genero).subscribe(
      (response) => {
        console.log(response);
        this.buscarTodos();
      }
    );
  }
  editar(genero : Genero) : void{
    this.showModal();
    this.generoService.get(genero).subscribe(
      genero => {
        this.genero = genero;
      }
    );
  }

  buscarTodos(): void {
    this.generoService.queryAll().subscribe(generos => {
      this.generos = generos;
    });
  }

  hideModal(): void {
    $("#myModal").modal("hide");
  }

  showModal(): void {
    $("#myModal").modal("show");
  }
}
