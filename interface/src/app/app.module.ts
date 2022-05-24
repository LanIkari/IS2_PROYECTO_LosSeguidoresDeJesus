import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchiDockerComponent } from './archi-docker/archi-docker.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { DirecDockerComponent } from './direc-docker/direc-docker.component';
import { ImgDockerComponent } from './img-docker/img-docker.component';
import { IntroDockerComponent } from './intro-docker/intro-docker.component';
import { VidaContenedorComponent } from './vida-contenedor/vida-contenedor.component';
import { DesarrolladorComponent } from './desarrollador/desarrollador.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ArchiDockerComponent,
    ContenedorComponent,
    DirecDockerComponent,
    ImgDockerComponent,
    IntroDockerComponent,
    VidaContenedorComponent,
    DesarrolladorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
