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


@NgModule({
  declarations: [
    AppComponent,
    VenClienteComponent,
    VenCadminComponent,
    UserToolbarComponent,
    JuegosDisplayComponent,
    JuegoCardComponent
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
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
