import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from '../interfaces/products';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {
  transform(searchProducts: IProducts[], searchText: string): IProducts[] {
    if (!searchProducts) {
      return [];
    }

    if (!searchText) {
      return searchProducts;
    }

    searchText = searchText.toLowerCase();

    return searchProducts.filter(searchProduct => {
      return searchProduct.title.toLowerCase().includes(searchText);
    });
  }
}

