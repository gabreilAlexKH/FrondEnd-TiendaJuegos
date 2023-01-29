import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasApiService {

  url: string = "http://localhost:3000/reservas";

  constructor(private http: HttpClient) { }


  /**
   * Recupera todas las reservas del url
   * @returns
   */
  public fetchAllReserva():Observable<Object>{
    return this.http.get(this.url);
  }

  /**
   * Crea una nueva reserva
   */
  public createReserva(videojuego_id: number) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({ "videojuego_id": videojuego_id });
    return this.http.post(this.url, body, { 'headers': headers });
  }

  /**
   * Elimina una reserva segun su id
   * @param videojuego_id
   * @returns
   */
  public deleteReserva(videojuego_id: number) {
    return this.http.delete(this.url + "/" + videojuego_id);
  }
}
