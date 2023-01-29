import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../../servicios/carrito-compras.service';
@Component({
  selector: 'app-ven-videojuegos-comprados',
  templateUrl: './ven-videojuegos-comprados.component.html',
  styleUrls: ['./ven-videojuegos-comprados.component.css']
})
export class VenVideojuegosCompradosComponent implements OnInit{
  videojuegos: any;
  protected titulo: string = "Game Store";
  protected lastPath: string = "inicio";
  protected nextPath: string = "";
  constructor (
    private carritoService: CarritoComprasService
    ) { }
  ngOnInit(): void {
    this.carritoService.getCompras().subscribe((data: any) =>{
      this.videojuegos = data;
    })

  }

}
