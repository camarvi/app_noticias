import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NoticiaComponent } from './components/noticia/noticia.component';


const APP_ROUTES : Routes = [
    { path: 'home' , component: HomeComponent },
    { path: 'about' , component: AboutComponent },
    { path: 'noticia/:id' , component: NoticiaComponent },
    { path: '**', pathMatch: 'full', redirectTo : 'home' }

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES); //, { useHash:true});
