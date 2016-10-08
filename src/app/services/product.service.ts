import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/Rx";
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  getCourses() {
    return this.http.get('http://localhost:11989/api/v1/public/products/')
      .map(res => res.json())
      .catch(this.handleError);
  }

  getCourse(tag: string) {
    return this.http.get('http://localhost:11989/api/v1/public/products/' + tag)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error(error);
    return Promise.reject(error);
  }
}
