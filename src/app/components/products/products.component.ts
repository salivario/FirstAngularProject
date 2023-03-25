import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import {ProductsService} from '../../services/products.service'
import { IProducts } from 'src/app/interfaces/products';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy{
products!: IProducts[];
productsSubscription!: Subscription;
constructor(private ProductsService: ProductsService){}
  ngOnInit() { 
    this.productsSubscription = this.ProductsService.getProducts().subscribe((data)=>{
      this.products = data
    })
  }
  ngOnDestroy(): void {
    if (this.productsSubscription) this.productsSubscription.unsubscribe();
  }
}
