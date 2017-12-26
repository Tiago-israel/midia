import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Genero } from './../dto/Genero';
import { Injectable } from '@angular/core';
import { AbstractHttpService } from './abstract-http.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GeneroService extends AbstractHttpService<Genero>{

  constructor(http : Http) { 
    super('generos',http)
  }

  getGeneros()  : Observable<Genero[]>{
    return this.queryAll();
  } 

}
