import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";


@Injectable()
export class ProductService {

  productUrl: string = 'http://localhost:11989/api/v1/public/products/';
  headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  }

<<<<<<< HEAD
  public getProducts() {
=======
  getProducts() {
>>>>>>> bc7fa5dedd55b9249ef44efc7cfc395a5373042d
    return this.http.get(this.productUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

<<<<<<< HEAD
  public getProduct(tag: string) {
=======
  getProduct(tag: string) {
>>>>>>> bc7fa5dedd55b9249ef44efc7cfc395a5373042d
    return this.http.get(this.productUrl + tag)
      .map(res => res.json())
      .catch(this.handleError);
  }

<<<<<<< HEAD
  public createProduct(product: Product): Observable<Product> {
=======
  createProduct(product: Product): Observable<Product> {
>>>>>>> bc7fa5dedd55b9249ef44efc7cfc395a5373042d
    var requestOptions = new RequestOptions({ headers: this.headers });
    return this.http.post(this.productUrl, product, requestOptions)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error(error);
    return Promise.reject(error);
  }
}
