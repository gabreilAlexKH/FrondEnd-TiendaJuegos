import { Component, OnInit } from '@angular/core';
import { ComprasApiService } from '../../servicios/compras-api.service';
import { Router } from '@angular/router';
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
    private rutedor: Router,
    private comprasService: ComprasApiService
    ) { }

  ngOnInit(): void {
    this.comprasService.getCompras().subscribe((data: any) =>{
      this.videojuegos = data;
    })
  }

  goToPage(path:string){
    this.rutedor.navigate([path]);
  }

  quitarCompra(id: number){
    this.comprasService.deleteCompra(id).subscribe();
    setTimeout ( () => {
      window.location.reload();
    }, 500
    )
  }


}
