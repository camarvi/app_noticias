import { Component, OnInit } from '@angular/core';

// Importar servicio
import { NoticiasService } from 'src/app/services/noticias.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listadoNoticias : any[] = [];
  


  constructor(private NoticiasServicie : NoticiasService) { 

    this.NoticiasServicie.getTodasNoticias()
        .subscribe((data:any)=>{
              this.listadoNoticias = data;
              console.log(this.listadoNoticias);
        });
  }

  ngOnInit() {
  }

}
