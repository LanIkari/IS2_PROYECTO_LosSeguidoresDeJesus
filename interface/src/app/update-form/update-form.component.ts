import {Component, HostBinding, OnInit} from '@angular/core';
import {Pelicula, PeliculasService} from "../services/peliculas.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
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

  constructor(private peliculasService: PeliculasService, private router: Router, private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    const params = this.activatedRouter.snapshot.params;

    if (params['id']) {
      this.peliculasService.getUnaPelicula(params['id']).subscribe(
        res => {
          const info = res;
          const obj = Object.assign({}, info);
          this.pelicula = obj;
          console.log(this.pelicula);
        },
        error => console.log(error)
      )
    }
  }

  actualizar() {
    const params = this.activatedRouter.snapshot.params;
    this.peliculasService.updatePelicula(params['id'], this.pelicula).subscribe(
      res => {
        console.log('Objeto Actualizado: ' + this.pelicula);
      },
      error => console.log(error)
    );
    this.router.navigate(['peliculas']);
  }

  cancelar() {
    this.router.navigate(['peliculas']);
  }
}
