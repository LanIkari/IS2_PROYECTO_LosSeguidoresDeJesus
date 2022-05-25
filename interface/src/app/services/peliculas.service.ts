import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  url = '/peliculas/'

  constructor(private http: HttpClient) {
  }

  getPelicula() {
    return this.http.get(this.url);
  }

  getUnaPelicula(id: string | undefined) {
    return this.http.get(this.url + 'edit/' + id);
  }

  postPelicula(equipo: Pelicula) {
    return this.http.post(this.url, equipo);
  }

  deletePelicula(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  updatePelicula(id: string | undefined, pelicula: Pelicula) {
    return this.http.put(this.url + '/' + id, pelicula);
  }
}


export interface Pelicula {
  id?: string;
  titulo?: string;
  anno?: string;
  genero?: string;
  duracion?: string;
  sinopsis?: string;
  director?: string;
  reparto?: string;
}
