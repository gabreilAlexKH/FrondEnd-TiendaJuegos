import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComprasApiService {

  url: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }


  public fetchAllCompras() {
    return this.http.get(this.url + 'compras');
  }
  public getCompras() {
    return this.http.get(this.url + 'videojuegos/join/compras');
  }
  public deleteCompra(id: number) {
    return this.http.delete(this.url + 'compras/join/videojuegos/' + id);
  }

  public createCompra(videojuego: any) {
    const headers = { 'content-type': 'application/json' };
    return this.http.post(this.url + 'compras', videojuego, { 'headers': headers });
  }

}
