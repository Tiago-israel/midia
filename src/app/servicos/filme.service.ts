import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Filme } from './../dto/Filme';
import { Injectable } from '@angular/core';
import { AbstractHttpService } from './abstract-http.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilmeService extends AbstractHttpService<Filme>{

  

  filmes: Filme[] = [];
  https: Http;
  constructor(http: Http) {
    super('filmes', http);
    this.https = http;
  }

  getFilmes(): Observable<Filme[]> {
    return this.queryAll();
  }

  getByTitulo(busca: string): Observable<Filme[]> {
    return this.https.get(`${this.apiUrl}${this.resource}/${"busca"}/${busca}`, this.getCustomOptions())
      .map(response => response.json());
  }

}
