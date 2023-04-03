import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/app/interfaces/products';
import { AddToBusketService } from 'src/app/services/add-to-busket.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit{
  constructor(private AddToBusketService: AddToBusketService, private dialogService: DialogService){

  }
  product!:IProducts;
  products!: IProducts[];
  productsSubscription!: Subscription;
  ngOnInit() { 
    this.products = this.AddToBusketService.getItems()
    }
    deleteItem(product: IProducts){
      console.log(product)
      this.AddToBusketService.removeItem(product.id)
    };
    openCheckoutDialog() {
      this.dialogService.openCheckoutDialog().subscribe(result => {
        console.log(result);
      });
  }
}
