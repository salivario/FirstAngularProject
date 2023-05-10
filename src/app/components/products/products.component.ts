import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import {ProductsService} from '../../services/products.service'
import {AddToBusketService} from '../../services/add-to-busket.service'
import { IProducts } from 'src/app/interfaces/products';
import { MatDialog } from '@angular/material/dialog';
import { SiteeditorComponent } from '../siteeditor/siteeditor.component';
import { VisitedListService } from '../../services/visited-list.service'
import { IsadminService } from 'src/app/services/isadmin.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy{
searchProducts!: IProducts[];
searchText!: string;
products!: IProducts[];
productsSubscription!: Subscription;
constructor(private ProductsService: ProductsService, private AddToBusketService: AddToBusketService, private VisitedListService: VisitedListService, private isAdminservice: IsadminService){}
  product!:IProducts;
  isAdmin$!: Observable<boolean>;
  productSubscribtion!: Subscription;
  ngOnInit() { 
    this.isAdmin$ = this.isAdminservice.getRights();
    this.productsSubscription = this.ProductsService.getProducts().subscribe((data)=>{
      this.products = data
    })
  };
  toBusket(product: IProducts){
    console.log(product)
    this.AddToBusketService.addItem(product);
  }
  
  deleteItem(id: number){
    console.log(id)
    this.ProductsService.deleteProduct(id).subscribe(()=> this.products.find( (item)=>{
      if(id === item.id){
        let idx = this.products.findIndex((data)=>data.id === id)
        this.products.splice(idx, 1)
      }
  }))
  }
  addVisit(product: IProducts){
    const foundProduct = this.products.find(p => p.id === product.id);
    if (foundProduct) {
      console.log(product)
      this.VisitedListService.addVisited(product)
    } else {
      return
  }
}
  ngOnDestroy(): void {
    if (this.productsSubscription) this.productsSubscription.unsubscribe();
  }
  
}
