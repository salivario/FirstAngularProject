import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SiteeditorComponent } from '../../siteeditor/siteeditor.component';
import { ProductReturnerService } from 'src/app/services/product-returner.service';
import { IProducts } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';
import { Observable, Subscription, map } from 'rxjs';
import { ClientReturnerService } from '../../../services/client-returner.service'
import { IsadminService } from 'src/app/services/isadmin.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor(public dialog: MatDialog, private ProductReturnerService: ProductReturnerService, private ProductsService: ProductsService, private ClientReturnerService: ClientReturnerService,
    private isAdminservice: IsadminService)
  {}
  products: IProducts[] = [];
  clientsCount$!: Observable<number>;
  isAdmin$!: Observable<boolean>;
  islog$!: Observable<boolean>;


  
  ngOnInit() {
    this.islog$ = this.isAdminservice.getLog();
    this.isAdmin$ = this.isAdminservice.getRights();

    this.islog$.subscribe(data => console.log(data));
    this.isAdmin$.subscribe(data => {console.log(data)
      if(this.isAdmin$){
        this.clientsCount$ = this.ClientReturnerService.getRequests().pipe(
          map(clients => clients.length)
          );
      }
    });

    
    
  }
  openDialog(): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = '460px';
    dialogConfig.height = '380px';
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
  
}
