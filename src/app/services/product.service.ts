import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";


@Injectable()
export class ProductService {

  productUrl: string = 'http://localhost:11989/api/products/';
  headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  }

  public getProducts() {
    return this.http.get(this.productUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  public getProduct(tag: string) {
    console.log(tag);
    return this.http.get(this.productUrl + tag)
      .map(res => res.json())
      .catch(this.handleError);
  }

  public createProduct(product: Product): Observable<Product> {
    var requestOptions = new RequestOptions({ headers: this.headers });
    return this.http.post(this.productUrl, product, requestOptions)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  public updateProduct(product: Product): Observable<Product> {
    var requestOptions = new RequestOptions({ headers: this.headers });
    return this.http.put(this.productUrl, product, requestOptions)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error(error);
    return Promise.reject(error);
  }
}
