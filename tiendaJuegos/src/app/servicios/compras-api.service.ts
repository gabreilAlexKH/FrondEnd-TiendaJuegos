import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComprasApiService {

  url:string = "http://localhost:3000/compras";

  constructor(private http:HttpClient) { }


  public fetchAllCompras(){
    return this.http.get(this.url);
  }

}
