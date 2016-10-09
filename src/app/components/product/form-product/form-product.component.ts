import { Component, OnInit } from '@angular/core';
import { Brand } from "../../../models/brand";
import { Product } from "../../../models/product";
import { BrandService } from '../../../services/brand.service';
import { ProductService } from '../../../services/product.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
  providers: [BrandService, ProductService],
})

export class FormProductComponent implements OnInit {
  brands: Brand[];
  public product = new Product();


  constructor(private brandService: BrandService,
    private productService: ProductService,
    private toastr: ToastsManager) { }

  ngOnInit() {
    this.getBrands();
  }

  private getBrands() {
    this.brandService.getBrand()
      .subscribe(data => this.brands = data,
      error => this.showErrorMessage(error)
      );
  }
  
  public onSubmit() {
    if (this.product.productId == 0) {
      this.productService.createProduct(this.product)
        .subscribe(data => this.createSuccess(data),
        error => this.showErrorMessage(error));
    }
  }

  private createSuccess(product: Product) {
    this.toastr.success('Product ' + product.name + ' created!', 'Success!');
    this.newProduct();
  }

  private showErrorMessage(error: any) {
    this.toastr.error('This is not good!', 'Oops!');
  }

  private newProduct() {
    this.product = new Product();
  }
}