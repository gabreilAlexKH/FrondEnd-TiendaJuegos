import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenClienteComponent } from './ventanas/ven-cliente/ven-cliente.component';
import { VenCadminComponent } from './ventanas/ven-cadmin/ven-cadmin.component';
import { VenInfoJuegoComponent } from './ventanas/ven-info-juego/ven-info-juego.component';
import { CarritoComprasComponent } from './ventanas/carrito-compras/carrito-compras.component';
import { VenCompraComponent } from './ventanas/ven-compra/ven-compra.component';
import { VenVideojuegosCompradosComponent } from './ventanas/ven-videojuegos-comprados/ven-videojuegos-comprados.component';
import { VenAdminComponent } from './ventanas/ven-admin/ven-admin.component';
import { VenEditComponent } from './ventanas/ven-edit/ven-edit.component';

const routes: Routes = [
  {path: "inicio", component: VenClienteComponent},
  {path: "juego/:id/info", component: VenInfoJuegoComponent},
  {path: "cadmin", component: VenCadminComponent},
  {path: "admin", component: VenAdminComponent},
  {path: "edit/:id/info", component: VenEditComponent},
  {path: "carrito-compras", component: CarritoComprasComponent},
  {path: "compra", component: VenCompraComponent},
  {path: "videojuegos-comprados", component: VenVideojuegosCompradosComponent},
  {path: "**", redirectTo:"inicio"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
