import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {
  url: string = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  public getCarrito() {
    return this.http.get(this.url + 'videojuegos/join/reservas');
  }

  public deleteCarrito(id: number) {
    return this.http.delete(this.url + 'reservas/join/videojuegos/' + id);
  }

  public deleteAllCarrito() {
    const headers = { 'content-type': 'application/json' };
    return this.http.post(this.url + 'reservas/all', { 'headers': headers });
  }

}
