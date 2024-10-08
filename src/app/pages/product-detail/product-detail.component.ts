import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProducto } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  loading: boolean = true;

  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);
  public product?: IProducto;

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      //console.log(params['id']);
      this._apiService.getProductById(params['id']).subscribe((data: IProducto) => {
        this.product = data;
        this.loading = false;
        // console.log(this.product);
      });
    })
  }
}
