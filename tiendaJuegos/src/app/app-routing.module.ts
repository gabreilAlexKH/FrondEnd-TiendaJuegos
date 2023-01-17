import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenClienteComponent } from './ventanas/ven-cliente/ven-cliente.component';
import { VenCadminComponent } from './ventanas/ven-cadmin/ven-cadmin.component';

const routes: Routes = [
  {path: "inicio", component: VenClienteComponent},
  {path: "admin", component: VenCadminComponent},
  {path: "*", redirectTo: "inicio"},
  {path: "", redirectTo: "inicio"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
