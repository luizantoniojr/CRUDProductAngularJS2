import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../../../models/product";
import { Brand } from "../../../models/brand";
import { ProductService } from '../../../services/product.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  providers: [ProductService]
})

export class DetailsProductComponent implements OnInit {
  @Input() product: Product;
  @Input() productId: string;

  constructor(private productService: ProductService,
    private toastr: ToastsManager) { 
      this.product = new Product();
      this.product.brand = new Brand();
    }

  ngOnInit() {
    this.getProduct(this.productId);
  }

  private getProduct(productId: string) {
    this.productService.getProduct(productId)
      .subscribe(data => this.product = data,
      error => this.showErrorMessage(error));
  }

  private showErrorMessage(error: any) {
    this.toastr.error('This is not good!', 'Oops!');
  }
}
