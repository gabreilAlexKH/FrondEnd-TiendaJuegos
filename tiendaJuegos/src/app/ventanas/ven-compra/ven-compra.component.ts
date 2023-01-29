import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ven-compra',
  templateUrl: './ven-compra.component.html',
  styleUrls: ['./ven-compra.component.css']
})
export class VenCompraComponent {
  protected titulo: string = "Game Store";
  protected lastPath: string = "carrito-compras";
  protected nextPath: string = "";

  constructor(private rutedor: Router){}

  goToPage(path:string){
    this.rutedor.navigate([path]);
  }
}
