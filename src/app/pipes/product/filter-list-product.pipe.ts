import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../models/product';

@Pipe({
  name: 'filterListProduct'
})

export class FilterListProduct implements PipeTransform {
  transform(products: Product[]) {
        return products.filter(product => product.name);
  }
}
