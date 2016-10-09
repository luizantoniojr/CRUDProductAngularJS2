import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  providers: [ProductService]
})

export class ListProductComponent implements OnInit {
  products: Product[];
  errorMessage: string;

  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(data => this.products = data, error => console.log(error));
  }
}