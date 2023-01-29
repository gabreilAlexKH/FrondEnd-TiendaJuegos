import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideojuegosApiService {

  url: string = "http://localhost:3000/videojuegos";

  constructor(private http: HttpClient) { }


  public fetchAllVideojuego() {

    return this.http.get(this.url);

  }

  public fetchVideojuego(id: number) {
    return this.http.get(this.url + "/" + id);
  }

  public createVideojuego(videojuego: any) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({ videojuego });
    return this.http.post(this.url, body, { 'headers': headers });
  }

  public editVideojuego(videojuego: any, id: number) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({ videojuego });
    return this.http.put(this.url + "/" + id, body, { 'headers': headers });
  }

  public deleteVideojuego(id: number) {
    return this.http.delete(this.url + "/" + id);
  }

  public fetchVideojuegoReservados() {
    return this.http.get(this.url + "/join/reservas");
  }
}
