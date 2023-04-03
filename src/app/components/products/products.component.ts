import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import {ProductsService} from '../../services/products.service'
import {AddToBusketService} from '../../services/add-to-busket.service'
import { IProducts } from 'src/app/interfaces/products';
import { MatDialog } from '@angular/material/dialog';
import { SiteeditorComponent } from '../siteeditor/siteeditor.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy{
products!: IProducts[];
productsSubscription!: Subscription;
constructor(private ProductsService: ProductsService, private AddToBusketService: AddToBusketService){}
  product!:IProducts;
  productSubscribtion!: Subscription;
  ngOnInit() { 
    this.productsSubscription = this.ProductsService.getProducts().subscribe((data)=>{
      this.products = data
    })
  };
  toBusket(product: IProducts){
    console.log(product)
    this.AddToBusketService.addItem(product);
  }
  canEdit: boolean = true;
  deleteItem(id: number){
    console.log(id)
    this.ProductsService.deleteProduct(id).subscribe(()=> this.products.find( (item)=>{
      if(id === item.id){
        let idx = this.products.findIndex((data)=>data.id === id)
        this.products.splice(idx, 1)
      }
  }))
  }
  ngOnDestroy(): void {
    if (this.productsSubscription) this.productsSubscription.unsubscribe();
  }
  
}
