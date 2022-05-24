import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiDockerComponent } from './archi-docker/archi-docker.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { DesarrolladorComponent } from './desarrollador/desarrollador.component';
import { DirecDockerComponent } from './direc-docker/direc-docker.component';
import { ImgDockerComponent } from './img-docker/img-docker.component';
import { IntroDockerComponent } from './intro-docker/intro-docker.component';
import { VidaContenedorComponent } from './vida-contenedor/vida-contenedor.component';

const routes: Routes = [
  { path: '/', component: DesarrolladorComponent },
  { path: 'intro', component: IntroDockerComponent },
  { path: 'archidocker', component: ArchiDockerComponent },
  { path: 'contenedor', component: ContenedorComponent },
  { path: 'desarrollador', component: DesarrolladorComponent },
  { path: 'direcdocker', component: DirecDockerComponent },
  { path: 'imgdocker', component: ImgDockerComponent },
  { path: 'vidadocker', component: VidaContenedorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
