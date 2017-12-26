import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Filme } from './../dto/Filme';
import { Injectable } from '@angular/core';
import { AbstractHttpService } from './abstract-http.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilmeService extends AbstractHttpService<Filme>{

  headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({headers: this.headers});

  filmes : Filme[] = [];

  constructor(http : Http) {
    super('filmes', http);
  }

  getFilmes(): Observable<Filme[]> {
    return this.queryAll();
  }

}
