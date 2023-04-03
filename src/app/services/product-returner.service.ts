import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProducts } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductReturnerService {
  product!:IProducts;
  productSubscribtion!: Subscription;
  constructor(private route: ActivatedRoute) { }
  getProduct(){
   return this.route.data.subscribe((data) => {this.product = data['data']});
  }
}
