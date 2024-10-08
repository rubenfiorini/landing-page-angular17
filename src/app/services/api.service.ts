import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //lo puse de esta manera y funciono en angular 18
  constructor(private _http: HttpClient) { }// Injecting HttpClient  

  //private _http = inject(HttpClient); // Injecting HttpClient
  private url: string = 'https://fakestoreapi.com/products'; // API URL

  getProducts():Observable<IProducto[]> { 
    return this._http.get<IProducto[]>(this.url); // Fetching data from API
  }

  getProductById(id: number):Observable<IProducto> {
    return this._http.get<IProducto>(`${this.url}/${id}`); // Fetching data by ID from API
  }


}
