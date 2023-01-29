import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { VideojuegosApiService } from '../../servicios/videojuegos-api.service';
import { Videojuego } from 'src/app/interfases/videojuego';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-ven-edit',
  templateUrl: './ven-edit.component.html',
  styleUrls: ['./ven-edit.component.css']
})
export class VenEditComponent {
  titulo:string = "Game Store";

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

  protected id: number = 0;

  constructor(private vidApi: VideojuegosApiService, private rutedor:Router, private formBuilder:FormBuilder, private videojuegosApiService: VideojuegosApiService, private ruta: ActivatedRoute){}

  profileForm = this.formBuilder.group({
    name: [this.juego.name],
    descripcion: [this.juego.descripcion],
    genre: [this.juego.genre],
    developer: [this.juego.developer],
    price: [this.juego.price],
    cover: [this.juego.cover]
  });

  ngOnInit() {

    this.ruta.params.subscribe((parm) => {

      this.id = parm["id"];

      forkJoin(
        this.vidApi.fetchVideojuego(this.id),
      ).subscribe((respuestas) => {

        this.juego = respuestas[0] as Videojuego;

        this.profileForm = this.formBuilder.group({
          name: [this.juego.name],
          descripcion: [this.juego.descripcion],
          genre: [this.juego.genre],
          developer: [this.juego.developer],
          price: [this.juego.price],
          cover: [this.juego.cover]
        });
      });
    });
  }
  
  protected goToPage(path:string){
    this.rutedor.navigate([path]);
  }

  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  saveForm() {
    this.videojuegosApiService.editVideojuego(this.profileForm.value, this.id).subscribe(data => {
      console.log('form',this.profileForm.value);
    })
    setTimeout(()=>{
      this.goToPage('admin')
    },
    500)
  }
}
