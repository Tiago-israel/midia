import { Genero } from './Genero';
export class Filme{
    idFilme : number;
    titulo : string;
    duracao : number;
    genero : Genero = new Genero();

}