import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Brand } from "../../../models/brand";
import { Product } from "../../../models/product";
import { ProductService } from '../../../services/product.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.html',
  providers: [ProductService],

})

export class UpdateProduct implements OnInit {
  product: Product = new Product();

  constructor(private productService: ProductService, private toastr: ToastsManager,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let tag: string = params['tag'];
      if (tag) {
        this.getProduct(tag);
      }
    });
  }

  public onSubmited() {
    this.product.brand = null;
    this.productService.updateProduct(this.product)
      .subscribe(data => this.updateSuccess(data),
      error => this.showErrorMessage(error));
  }

  private getProduct(tag: string) {
    this.productService.getProduct(tag)
      .subscribe(data => this.product = data,
      error => this.showErrorMessage(error));
  }

  private showErrorMessage(error: any) {
    this.toastr.error('This is not good!', 'Oops!');
  }

  private updateSuccess(product: Product) {
    this.router.navigateByUrl('product/read');
    this.toastr.success('Product ' + product.name + ' updated!', 'Success!');
  }
}
