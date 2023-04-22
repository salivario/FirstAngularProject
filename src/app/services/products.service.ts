import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducts } from '../interfaces/products';
import { IClient } from '../interfaces/iclient';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url: string = "http://localhost:3000/products";
  url2: string = "http://localhost:3000/clients";
  constructor(private http: HttpClient) { }
  getProducts(){
    return this.http.get<IProducts []>(this.url);
  }
  getProduct(id: number){
    return this.http.get<IProducts >(`${this.url}/${id}`);
    
  }
  postClient(formData: IClient){
    return this.http.post<any>(this.url2, formData, );
  }
  postProduct(product: IProducts){
    return this.http.post<IProducts>(this.url, product)
  }
  deleteProduct(id: number){
    return this.http.delete<any>(`${this.url}/${id}`)
  }
}
