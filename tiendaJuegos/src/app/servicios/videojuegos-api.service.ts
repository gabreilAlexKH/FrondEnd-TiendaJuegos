import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideojuegosApiService {

  url:string = "http://localhost:3000/videojuegos";

  constructor(private http:HttpClient) { }


  public fetchAllVideojuego(){

    return this.http.get(this.url);

  }

  public fetchVideojuego(id:number){

    return this.http.get(this.url + "/"+id);

  }

  public fetchVideojuegoReservados(){
    return this.http.get(this.url + "/join/reservas");
  }
}
