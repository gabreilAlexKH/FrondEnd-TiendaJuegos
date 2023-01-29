import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/interfases/videojuego';
import { VideojuegosApiService } from 'src/app/servicios/videojuegos-api.service';
import { ReservasApiService } from 'src/app/servicios/reservas-api.service';
import { ComprasApiService } from 'src/app/servicios/compras-api.service';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Reserva } from 'src/app/interfases/reserva';
import { Compra } from 'src/app/interfases/compra';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ven-info-juego',
  templateUrl: './ven-info-juego.component.html',
  styleUrls: ['./ven-info-juego.component.css']
})
export class VenInfoJuegoComponent implements OnInit {

  protected titulo: string = "Game Store";
  protected lastPath: string = "inicio";
  protected nextPath: string = "";
  protected buttonMesage: string = "Comprar";
  protected id: number = 0;

  public juego: Videojuego = {
    id: 0,
    name: "def",
    descripcion: "def",
    genre: "def",
    developer: "def",
    price: "0",
    cover: "https://cdn.discordapp.com/attachments/1009846868806729738/1063303877509775421/unnamed_1.png",
    reservado: false,
    comprado: false
  }


  constructor(private vidApi: VideojuegosApiService, private resApi: ReservasApiService, private compApi: ComprasApiService, private ruta: ActivatedRoute, private router: Router) { }


  ngOnInit() {

    this.ruta.params.subscribe((parm) => {

      this.id = parm["id"];

      forkJoin(
        this.vidApi.fetchVideojuego(this.id),
        this.compApi.fetchAllCompras(),
        this.resApi.fetchAllReserva()
      ).subscribe((respuestas) => {

        this.juego = respuestas[0] as Videojuego;
        let compras = respuestas[1] as Compra[];
        let reservas = respuestas[2] as Reserva[];

        let res: Reserva[] = reservas.filter((val: Reserva) => {
          return val.videojuego_id == this.juego.id;
        });

        this.juego.reservado = res.length == 1 ? true : false;
        let comp: Compra[] = compras.filter((val: Compra) => {
          return val.videojuego_id == this.juego.id;
        });

        this.juego.comprado = comp.length == 1 ? true : false;
        this.setNextAction();
      });
    });
  }

  /**
   * Establese las variables para nextAction() segun el estado del videojuego de la pagina
   */
  private setNextAction() {

    if (this.juego.reservado) {
      this.buttonMesage = "Ver Reservas";
      this.nextPath = "carrito-compras";

    } else if (this.juego.comprado) {
      this.buttonMesage = "Ver en Biblioteca";
      this.nextPath = "videojuegos-comprados";

    } else {
      this.buttonMesage = "Comprar";
      this.nextPath = "carrito-compras";
    }
  }


  protected nextAction() {

    if (!this.juego.reservado && !this.juego.comprado) {

      this.resApi.createReserva(this.juego.id).subscribe((respuesta) => {
        let neu: Reserva = respuesta as Reserva;
        if (neu.videojuego_id == this.juego.id) {
          this.router.navigate([this.nextPath]);
        } else {
          window.alert("Error de envio, no se registro reserva");
        }
      });

    } else {
      this.router.navigate([this.nextPath]);
    }
  }
}
