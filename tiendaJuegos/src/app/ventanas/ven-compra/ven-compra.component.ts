import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ComprasApiService } from '../../servicios/compras-api.service';
import { CarritoComprasService } from '../../servicios/carrito-compras.service';
@Component({
  selector: 'app-ven-compra',
  templateUrl: './ven-compra.component.html',
  styleUrls: ['./ven-compra.component.css']
})
export class VenCompraComponent {
  protected titulo: string = "Game Store";
  protected lastPath: string = "carrito-compras";
  protected nextPath: string = "";
  protected total: any = localStorage.getItem("total")
  constructor(
    private rutedor: Router,
    private formBuilder:FormBuilder,
    private comprasService: ComprasApiService,
    private carritoService: CarritoComprasService
    ){}

  save(){
    let carrito:any = localStorage.getItem("carrito")
    let videojuegos = JSON.parse(carrito)
    for (let videojuego of videojuegos) {

      let profileForm = 
        this.formBuilder.group({
          videojuego_id: [videojuego.id],
          sell_price: [Number(videojuego.price)],
          card: [3],
        });

      this.comprasService.createCompra(profileForm.value).subscribe()
    }    
  }

  goToPage(path:string){
    this.carritoService.deleteAllCarrito().subscribe()
    this.save()
    setTimeout ( () => {
      window.location.reload();
    }, 500
    )
    this.rutedor.navigate([path]);
  }

  numberOnly(event:any, cedula:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    console.log(String(cedula.value.lenght))
    if (cedula.value > 100000000){
      return false
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
