import { Injectable } from '@angular/core';
import { IProducts } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class VisitedListService {
  visitedProducts: IProducts[]=[];
  addVisited(product: IProducts){
    if (!this.visitedProducts.some(p => p.id === product.id)) {
      this.visitedProducts.push(product);
    }
  }
  getVisited(){
    return this.visitedProducts;
  }
  constructor() { }
}
