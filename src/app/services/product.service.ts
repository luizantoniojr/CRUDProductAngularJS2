import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import "rxjs/Rx";
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  productUrl: string = 'http://localhost:11989/api/v1/public/products/';

  constructor(private http: Http) { }

  getProducts() {
    return this.http.get(this.productUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getProduct(tag: string) {
    return this.http.get(this.productUrl + tag)
      .map(res => res.json())
      .catch(this.handleError);
  }

  createProduct(product: Product) {
    let body = JSON.stringify({ product });
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    console.log(body);
    console.log(headers);
    console.log(options);
    this.http.post(this.productUrl, body, options)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error(error);
    return Promise.reject(error);
  }
}
