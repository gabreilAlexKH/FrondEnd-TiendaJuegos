import { Component, Input } from '@angular/core';
import { Videojuego } from 'src/app/interfases/videojuego';

@Component({
  selector: 'app-juego-card',
  templateUrl: './juego-card.component.html',
  styleUrls: ['./juego-card.component.css']
})
export class JuegoCardComponent {

  @Input() public mode:number = 0;
  @Input() public juego:Videojuego = {
    id: 0,
    name: "def",
    descripcion:"def",
    genre: "def",
    developer: "def",
    price:"0",
    cover:"https://cdn.discordapp.com/attachments/1009846868806729738/1063303877509775421/unnamed_1.png"
  }

  protected action(){

    switch (this.mode) {
      case 0:
        console.log(this.juego.id);
        break;

      case 1:

        break;

      case 2:

          break;

    }
  }

}
