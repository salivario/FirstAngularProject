import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { BasketComponent } from './components/basket/basket.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductResolver } from './services/product.resolver';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientGuard } from './guerds/client.guard';
import { AutorizationComponent } from './components/autorization/autorization.component';
import { IslogGuard } from './guerds/islog.guard';


const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'products', component: ProductsComponent, canActivate: [IslogGuard]},
  {path: 'product/:id', component: ProductDetailsComponent, resolve: {data: ProductResolver}},
  {path: 'basket', component: BasketComponent, canActivate: [IslogGuard]},
  {path: 'Clients', component: ClientsComponent, canActivate: [ClientGuard]},
  {path: 'autorization', component: AutorizationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
