import { Component, OnInit } from '@angular/core';
import { Brand } from "../../../models/brand";
import { Product } from "../../../models/product";
import { BrandService } from '../../../services/brand.service';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
  providers: [BrandService, ProductService],
})

export class FormProductComponent implements OnInit {
  brands: Brand[];
  product = new Product();

  constructor(private productService: ProductService, private brandService: BrandService) { }

  ngOnInit() {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrand()
      .subscribe(data => this.brands = data, error => console.log(error));
  }

  onSubmit() {
    if (this.product.productId == 0) {
      this.productService.createProduct(this.product);
    }
  }
}
