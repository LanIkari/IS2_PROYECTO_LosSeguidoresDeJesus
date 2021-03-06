import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArchiDockerComponent} from './archi-docker/archi-docker.component';
import {ContenedorComponent} from './contenedor/contenedor.component';
import {DesarrolladorComponent} from './desarrollador/desarrollador.component';
import {DirecDockerComponent} from './direc-docker/direc-docker.component';
import {ImgDockerComponent} from './img-docker/img-docker.component';
import {IntroDockerComponent} from './intro-docker/intro-docker.component';
import {VidaContenedorComponent} from './vida-contenedor/vida-contenedor.component';
import {ApiViewComponent} from "./api-view/api-view.component";
import {UpdateFormComponent} from './update-form/update-form.component';
import {PostFormComponent} from "./post-form/post-form.component";

const routes: Routes = [
  {path: '', redirectTo: '/desarrollador', pathMatch: 'full'},
  {path: 'introdocker', component: IntroDockerComponent},
  {path: 'archidocker', component: ArchiDockerComponent},
  {path: 'contenedor', component: ContenedorComponent},
  {path: 'desarrollador', component: DesarrolladorComponent},
  {path: 'direcdocker', component: DirecDockerComponent},
  {path: 'imgdocker', component: ImgDockerComponent},
  {path: 'vidacontenedor', component: VidaContenedorComponent},
  {path: 'peliculas', component: ApiViewComponent},
  {path: 'peliculas/add', component: PostFormComponent},
  {path: 'pelicula/:id', component: UpdateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
