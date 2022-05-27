import {Component, HostBinding, OnInit} from '@angular/core';
import {Pelicula, PeliculasService} from "../services/peliculas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @HostBinding('class') clasess = 'row';
  pelicula: Pelicula = {
    _id: '',
    titulo: '',
    anno: '',
    genero: '',
    duracion: '',
    sinopsis: '',
    director: '',
    reparto: ''
  }

  constructor(private peliculasService: PeliculasService, private router: Router) {
  }

  ngOnInit(): void {
  }

  agregarPelicula() {
    this.peliculasService.postPelicula(this.pelicula).subscribe();
    this.router.navigate(['peliculas']);
  }

  cancelar() {
    this.router.navigate(['peliculas']);
  }
}
