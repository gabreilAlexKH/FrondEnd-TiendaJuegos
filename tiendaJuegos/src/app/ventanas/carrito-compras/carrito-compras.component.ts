import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../../servicios/carrito-compras.service';
@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit{
  videojuegos: any;
  total: Number = 0;
  protected titulo: string = "Game Store";
  protected lastPath: string = "inicio";
  protected nextPath: string = "";
  constructor (
    private carritoService: CarritoComprasService
    ) { }

  ngOnInit(): void {
    this.carritoService.getCarrito().subscribe((data: any) =>{
      this.videojuegos = data;
      this.total = data.length * 60.0
    })

  }


}
