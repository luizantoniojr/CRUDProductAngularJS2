import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Brand } from "../../../models/brand";
import { Product } from "../../../models/product";
import { ProductService } from '../../../services/product.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.html',
  providers: [ProductService],
})

export class CreateProduct {
  product: Product = new Product();

  constructor(private productService: ProductService, private toastr: ToastsManager,
    private route: ActivatedRoute, private router: Router) { }

  public onSubmited() {
    this.productService.createProduct(this.product)
      .subscribe(data => this.createSuccess(data),
      error => this.showErrorMessage(error));
  }

  private showErrorMessage(error: any) {
    this.toastr.error('This is not good!', 'Oops!');
  }

  private createSuccess(product: Product) {
    this.router.navigateByUrl('product/read');
    this.toastr.success('Product ' + product.name + ' created!', 'Success!');
  }
}