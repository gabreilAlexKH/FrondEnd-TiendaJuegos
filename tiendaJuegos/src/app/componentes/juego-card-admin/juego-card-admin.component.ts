import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Videojuego } from 'src/app/interfases/videojuego';
import { Router } from '@angular/router';
import { VideojuegosApiService } from '../../servicios/videojuegos-api.service';
import { CarritoComprasService } from '../../servicios/carrito-compras.service';

@Component({
  selector: 'app-juego-card-admin',
  templateUrl: './juego-card-admin.component.html',
  styleUrls: ['./juego-card-admin.component.css']
})
export class JuegoCardAdminComponent implements OnChanges {

  @Input() public mode: number = 0;
  @Input() public juego: Videojuego = {
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
  protected statIndiator: string = "US$ " + this.juego.price;

  constructor(private vidApi: VideojuegosApiService, private videojuegosApiService: VideojuegosApiService, private rutedor: Router, private carritoService: CarritoComprasService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["juego"]) {
      this.statIndiator = "US$ " + this.juego.price;
    }
  }

  protected action() {
    switch (this.mode) {
      case 0:
        this.rutedor.navigate(["edit/" + this.juego.id + "/info"]);
        break;
      case 1:
        this.rutedor.navigate(["edit/" + this.juego.id + "/info"]);
        break;
      case 2:
        this.rutedor.navigate(["edit/" + this.juego.id + "/info"]);
        break;

    }
  }

  protected goToPage(path:string){
    this.rutedor.navigate([path]);
  }

  protected delete() {

    this.carritoService.deleteCarrito(this.juego.id).subscribe();
    setTimeout ( () => {
      window.location.reload();
    }, 500
    )
    this.videojuegosApiService.deleteVideojuego(this.juego.id).subscribe(data => {
      console.log('delete');
    })
    setTimeout(()=>{
      location.reload()
    },
    500)
  }
}
