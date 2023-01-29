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

  constructor(private rutedor:Router, private formBuilder:FormBuilder, private videojuegosApiService: VideojuegosApiService){}

  profileForm = this.formBuilder.group({
    name: [''],
    descripcion: [''],
    genre: [''],
    developer: [''],
    price: [''],
    cover: ['']
  });

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
    this.videojuegosApiService.createVideojuego(this.profileForm.value).subscribe(data => {
      console.log('form',this.profileForm.value);
    })
    setTimeout(()=>{
      this.goToPage('admin')
    },
    500)
  }
}
