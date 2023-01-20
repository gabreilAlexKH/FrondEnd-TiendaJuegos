import { Component } from '@angular/core';
import { Videojuego } from 'src/app/interfases/videojuego';
import { VideojuegosApiService } from 'src/app/servicios/videojuegos-api.service';
@Component({
  selector: 'app-ven-cliente',
  templateUrl: './ven-cliente.component.html',
  styleUrls: ['./ven-cliente.component.css']
})
export class VenClienteComponent {


  titulo:string = "Game Store";
  protected videojuegos: Videojuego[] = [];
  loading:boolean = true;
  nJueogos:number = 0;

  constructor(private vidApi:VideojuegosApiService){

    this.vidApi.fetchAllVideojuego().subscribe( (respuesta) =>{


      this.videojuegos = respuesta as Videojuego[];

      this.loading = false;
      this.nJueogos = this.videojuegos.length;

    });

  }

}
