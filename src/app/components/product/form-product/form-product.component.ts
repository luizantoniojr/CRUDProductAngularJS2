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
<<<<<<< HEAD
  public product = new Product();


  constructor(private brandService: BrandService,
    private productService: ProductService,
=======
  product = new Product();

  constructor(private productService: ProductService,
    private brandService: BrandService,
>>>>>>> bc7fa5dedd55b9249ef44efc7cfc395a5373042d
    private toastr: ToastsManager) { }

  ngOnInit() {
    this.getBrands();
  }

  private getBrands() {
    this.brandService.getBrand()
<<<<<<< HEAD
      .subscribe(data => this.brands = data,
      error => this.showErrorMessage(error)
      );
  }

  public onSubmit() {
=======
      .subscribe(data => this.brands = data, 
      error => this.showErrorMessage(error));
  }

  onSubmit() {
>>>>>>> bc7fa5dedd55b9249ef44efc7cfc395a5373042d
    if (this.product.productId == 0) {
      this.productService.createProduct(this.product)
        .subscribe(data => this.createSuccess(data),
        error => this.showErrorMessage(error));
<<<<<<< HEAD
    }
  }

  private createSuccess(product: Product) {
    this.toastr.success('Product ' + product.name + ' created!', 'Success!');
    this.newProduct();
=======
      this.newProduct();
    }
  }

  createSuccess(product: Product) {
    this.toastr.success('Product ' + product.name + ' created!', 'Success!');
>>>>>>> bc7fa5dedd55b9249ef44efc7cfc395a5373042d
  }

  private showErrorMessage(error: any) {
    this.toastr.error('This is not good!', 'Oops!');
  }

  private newProduct() {
    this.product = new Product();
  }
}