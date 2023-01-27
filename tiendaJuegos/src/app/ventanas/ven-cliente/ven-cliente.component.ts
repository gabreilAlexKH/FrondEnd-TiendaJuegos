import { Component } from '@angular/core';
import { Videojuego } from 'src/app/interfases/videojuego';
import { VideojuegosApiService } from 'src/app/servicios/videojuegos-api.service';
import { ReservasApiService } from 'src/app/servicios/reservas-api.service';
import { ComprasApiService } from 'src/app/servicios/compras-api.service';
import { forkJoin } from 'rxjs';
import { Compra } from 'src/app/interfases/compra';
import { Reserva } from 'src/app/interfases/reserva';

@Component({
  selector: 'app-ven-cliente',
  templateUrl: './ven-cliente.component.html',
  styleUrls: ['./ven-cliente.component.css']
})
export class VenClienteComponent {


  titulo: string = "Game Store";
  protected videojuegos: Videojuego[] = [];
  loading: boolean = true;
  nJueogos: number = 0;

  constructor(private vidApi: VideojuegosApiService, private resApi: ReservasApiService, private compApi: ComprasApiService) {

    forkJoin(
      this.vidApi.fetchAllVideojuego(),
      this.compApi.fetchAllCompras(),
      this.resApi.fetchAllReserva()
    ).subscribe((respuestas) => {


      this.videojuegos = respuestas[0] as Videojuego[];
      console.log(this.videojuegos);
      let compras = respuestas[1] as Compra[];
      let reservas = respuestas[2] as Reserva[];

      if (this.videojuegos.length == 0) {

        console.log("No data avalabel");
      } else {


        for (const juego of this.videojuegos) {

          let res: Reserva[] = reservas.filter((val: Reserva) => {
            return val.videojuego_id == juego.id;
          });
          juego.reservado = res.length == 1 ? true : false;


          let comp: Compra[] = compras.filter((val: Compra) => {
            return val.videojuego_id == juego.id;
          });
          juego.comprado = comp.length == 1 ? true : false;

        }
        this.nJueogos = this.videojuegos.length;
        this.loading = false;
      }
    });

  }

}
