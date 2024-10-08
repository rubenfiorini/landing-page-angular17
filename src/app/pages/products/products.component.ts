import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProducto } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productList: IProducto[] = []; // Array to store products
  private _apiService = inject(ApiService); // Injecting ApiService
  private _router = inject(Router); // Injecting Router

  detalleProducto(producto: number): void {
    //console.log(producto);
    this._router.navigate(['/products', producto]); 
  }

  ngOnInit(): void {
  
    this._apiService.getProducts().subscribe((data: IProducto[]) => {
      //console.log(data)
      this.productList = data; // Assigning data to productList
    });
  }
}
