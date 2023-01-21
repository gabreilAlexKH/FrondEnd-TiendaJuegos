import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenClienteComponent } from './ventanas/ven-cliente/ven-cliente.component';
import { VenCadminComponent } from './ventanas/ven-cadmin/ven-cadmin.component';
import { VenInfoJuegoComponent } from './ventanas/ven-info-juego/ven-info-juego.component';


const routes: Routes = [
  {path: "inicio", component: VenClienteComponent},
  {path: "juego/:id/info", component: VenInfoJuegoComponent},
  {path: "admin", component: VenCadminComponent},
  {path: "*", redirectTo:"inicio"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
