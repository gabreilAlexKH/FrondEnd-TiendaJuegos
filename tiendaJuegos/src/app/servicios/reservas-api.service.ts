import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservasApiService {

  url:string = "http://localhost:3000/reservas";

  constructor(private http:HttpClient) { }


  public fetchAllReserva(){
    return this.http.get(this.url);
  }

  public createReserva(videojuego_id:number){

    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify({"videojuego_id":videojuego_id});

    return this.http.post(this.url, body , {'headers':headers});
  }

  public deleteReserva(videojuego_id:number){
    return this.http.delete(this.url + "/" + videojuego_id);
  }
}
