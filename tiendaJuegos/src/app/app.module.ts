import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VenClienteComponent } from './ventanas/ven-cliente/ven-cliente.component';
import { VenCadminComponent } from './ventanas/ven-cadmin/ven-cadmin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UserToolbarComponent } from './componentes/user-toolbar/user-toolbar.component';
import { JuegosDisplayComponent } from './componentes/juegos-display/juegos-display.component';

import { HttpClientModule } from '@angular/common/http';
import { JuegoCardComponent } from './componentes/juego-card/juego-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { VenInfoJuegoComponent } from './ventanas/ven-info-juego/ven-info-juego.component';
import { CarritoComprasComponent } from './ventanas/carrito-compras/carrito-compras.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { VenCompraComponent } from './ventanas/ven-compra/ven-compra.component';
import { VenVideojuegosCompradosComponent } from './ventanas/ven-videojuegos-comprados/ven-videojuegos-comprados.component'; 
import { VenAdminComponent } from './ventanas/ven-admin/ven-admin.component';
import { VenEditComponent } from './ventanas/ven-edit/ven-edit.component';
import { JuegosDisplayAdminComponent } from './componentes/juegos-display-admin/juegos-display-admin.component';
import { JuegoCardAdminComponent } from './componentes/juego-card-admin/juego-card-admin.component'; 

@NgModule({
  declarations: [
    AppComponent,
    VenClienteComponent,
    VenCadminComponent,
    UserToolbarComponent,
    JuegosDisplayComponent,
    JuegoCardComponent,
    VenInfoJuegoComponent,
    CarritoComprasComponent,
    VenCompraComponent,
    VenVideojuegosCompradosComponent,
    VenAdminComponent,
    VenEditComponent,
    JuegosDisplayAdminComponent,
    JuegoCardAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
