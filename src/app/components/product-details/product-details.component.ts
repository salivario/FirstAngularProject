import { Subscription } from 'rxjs';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from 'src/app/interfaces/products';
import { ProductReturnerService } from 'src/app/services/product-returner.service';
import { AddToBusketService } from 'src/app/services/add-to-busket.service';
import { ProductsService } from 'src/app/services/products.service';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  product!:IProducts;
  productSubscribtion!: Subscription;
  constructor(private route: ActivatedRoute, private ProductReturnerService: ProductReturnerService, private AddToBusketService:AddToBusketService, private ProductsService:ProductsService){ }
  toBusket(product: IProducts){
    this.AddToBusketService.addItem(this.product);
  }
  
  ngOnInit(){
    this.productSubscribtion = this.route.data.subscribe((data)=>{
      this.product = data["data"]
    })
    }
  }
