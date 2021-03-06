import {Component, OnInit} from '@angular/core';
import {Pelicula, PeliculasService} from "../services/peliculas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-api-view',
  templateUrl: './api-view.component.html',
  styleUrls: ['./api-view.component.css']
})


export class ApiViewComponent implements OnInit {

  ListarPeliculas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService, private router: Router) {
  }

  ngOnInit(): void {
    this.listarPeliculas();
  }

  listarPeliculas() {
    this.peliculasService.getPelicula().subscribe(
      res => {
        console.log(typeof this.ListarPeliculas);
        this.ListarPeliculas = <any>res;
      },
      err => console.log(err)
    );
  }

  eliminar(index: number) {
    // @ts-ignore
    var id: string = this.ListarPeliculas[index]._id;
    this.peliculasService.deletePelicula(id).subscribe(
      res => {
        console.log('Equipo eliminado');
        this.listarPeliculas();
      },
      err => console.log(err)
    );
  }

  editar(id:any) {
    this.router.navigate(['pelicula/'+id]);
  }
}
