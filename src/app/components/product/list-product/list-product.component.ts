import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  providers: [ProductService]
})

export class ListProductComponent implements OnInit {
  products: Product[];
  errorMessage: string;

  constructor(private productService: ProductService,
    private toastr: ToastsManager) { }
  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(data => this.products = data,
      error => this.showErrorMessage(error));
  }

  private showErrorMessage(error: any) {
    this.toastr.error('This is not good!', 'Oops!');
  }
}