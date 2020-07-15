import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// ARCHIVO DE RUTAS

import { APP_ROUTING } from './app.route';

// SERVICIOS
import { NoticiasService } from './services/noticias.service';
import {  HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NoticiaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [NoticiasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
