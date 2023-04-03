import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SiteeditorComponent } from '../../siteeditor/siteeditor.component';
import { ProductReturnerService } from 'src/app/services/product-returner.service';
import { IProducts } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public dialog: MatDialog, private ProductReturnerService: ProductReturnerService, private ProductsService: ProductsService){}
  products: IProducts[] = [];
  openDialog(): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = '460px';
    dialogConfig.height = '300px';
    dialogConfig.disableClose = true;
    dialogConfig.data = this.ProductReturnerService.getProduct();
    const dialogRef = this.dialog.open(SiteeditorComponent, dialogConfig)
    dialogRef.afterClosed().subscribe((data)=>{
      if(data){
      this.postData(data)}})
  
  };
  postData(data: IProducts){
    console.log(this.products)
    this.ProductsService.postProduct(data).subscribe((data)=> this.products.push(data))
  }
  canEdit = true;
}
