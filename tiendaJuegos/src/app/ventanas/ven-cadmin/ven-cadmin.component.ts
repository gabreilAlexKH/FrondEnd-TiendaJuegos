import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { VideojuegosApiService } from '../../servicios/videojuegos-api.service';

@Component({
  selector: 'app-ven-cadmin',
  templateUrl: './ven-cadmin.component.html',
  styleUrls: ['./ven-cadmin.component.css']
})
export class VenCadminComponent {

  titulo:string = "Game Store";
  loading:boolean = true;
  nJueogos:number = 0;

  constructor(private rutedor:Router, private formBuilder:FormBuilder, private videojuegosApiService: VideojuegosApiService){}

  profileForm = this.formBuilder.group({
    name: [''],
    descripcion: [''],
    genre: [''],
    developer: [''],
    price: [''],
    cover: ['https://cdn.discordapp.com/attachments/1009846868806729738/1063303877509775421/unnamed_1.png']
  });



  protected goToPage(path:string){

    this.rutedor.navigate([path]);

  }

  saveForm() {
    this.videojuegosApiService.createVideojuego(this.profileForm.value).subscribe(data => {
      console.log('form',this.profileForm.value);
    })

  }
}
