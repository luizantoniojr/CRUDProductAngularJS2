import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  @Input() product: Product = new Product();
  @Output() onSubmited = new EventEmitter<boolean>();

  constructor(private brandService: BrandService,
    private productService: ProductService,
    private toastr: ToastsManager,
    private route: ActivatedRoute) {
  }

  onSubmit() {
    this.onSubmited.emit();
  }

  ngOnInit() {
    this.getBrands();
  }

  private getBrands() {
    this.brandService.getBrand()
      .subscribe(data => this.brands = data,
      error => this.showErrorMessage(error));
  }

  private showErrorMessage(error: any) {
    this.toastr.error('This is not good!', 'Oops!');
  }
}