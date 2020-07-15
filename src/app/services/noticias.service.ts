import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http : HttpClient) { 

    console.log("Servicio Ok");
  }


getTodasNoticias(){
    return this.http.get('http://www.rtve.es/api/noticias.json')
    .pipe(map(data =>{
      return data['page'].items;
    }));

}

}
