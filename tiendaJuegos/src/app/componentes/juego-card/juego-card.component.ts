import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Videojuego } from 'src/app/interfases/videojuego';
import { Router } from '@angular/router';


@Component({
  selector: 'app-juego-card',
  templateUrl: './juego-card.component.html',
  styleUrls: ['./juego-card.component.css']
})
export class JuegoCardComponent implements OnChanges {

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

  constructor(private rutedor: Router) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["juego"]) {

      if (this.juego.reservado) {
        this.statIndiator = "RESERVADO";
      } else if (this.juego.comprado) {
        this.statIndiator = "COMPRADO";
      } else {
        this.statIndiator = "US$ " + this.juego.price;
      }
    }
  }



  protected action() {
    switch (this.mode) {
      case 0:
        this.rutedor.navigate(["juego/" + this.juego.id + "/info"]);

        break;

      case 1:

        break;

      case 2:

        break;

    }
  }

}
