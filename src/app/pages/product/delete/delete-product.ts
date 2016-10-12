import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Product } from "../../../models/product";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.html',
  providers: [ProductService]
})

export class DeleteProduct implements OnInit {
  productId: string;

  constructor(private productService: ProductService,
    private toastr: ToastsManager,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getParameterAndFillProductId();
  }

  private getParameterAndFillProductId() {
    this.route.params.forEach((params: Params) => {
      let tag: string = params['tag'];
      if (tag) {
        this.productId = tag;
      }
    });
  }

  private confirmDelete() {
    this.productService.deleteProduct(this.productId)
      .subscribe(data => this.deleteSuccess(data));
  }

  private deleteSuccess(product: Product) {
    this.router.navigateByUrl('product/read');
    this.toastr.success('Product ' + product.name + ' deleted!', 'Success!');
  }
}
