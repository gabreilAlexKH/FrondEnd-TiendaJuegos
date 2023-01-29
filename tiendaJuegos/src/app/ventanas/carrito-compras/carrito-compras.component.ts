import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../../servicios/carrito-compras.service';
import { Router } from '@angular/router';
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
    private rutedor: Router,
    private carritoService: CarritoComprasService
    ) { }

  ngOnInit(): void {
    this.carritoService.getCarrito().subscribe((data: any) =>{
      this.videojuegos = data;
      this.total = this.videojuegos.reduce( 
        function (acc:any,vj:any) {
          return acc + Number(vj.price)
        }, 0
      )
    })

  }
  
  goToPage(path:string){
    this.rutedor.navigate([path]);
  }

  quitarCarrito(id: number){
    this.carritoService.deleteCarrito(id).subscribe();
    setTimeout ( () => {
      window.location.reload();
    }, 500
    )
  }

}
