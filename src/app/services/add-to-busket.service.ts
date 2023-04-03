import { Injectable } from '@angular/core';
import { IProducts } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class AddToBusketService {
  busket: IProducts[] = [];
  constructor() { 
    const storedItems = sessionStorage.getItem('busketItems');
  if (storedItems) {
    this.busket = JSON.parse(storedItems);
  }}
  
  addItem(product: any) {
    this.busket.push(product);
    this.saveToStorage();
    console.log(this.busket)
  };
  getItems() {
    return this.busket;
  };
  removeItem(id: number) {
    const index = this.busket.findIndex(item => item.id === id);
    if (index !== -1) {
      this.busket.splice(index, 1);
      this.saveToStorage();
    }
  }
  clearCart() {
    this.busket = [];
    return this.busket;
  };
  private saveToStorage() {
    sessionStorage.setItem('busketItems', JSON.stringify(this.busket));
  }
}
