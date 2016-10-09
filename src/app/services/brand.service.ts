import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/Rx";
import { Brand } from '../models/brand';

@Injectable()
export class BrandService {

  constructor(private http: Http) { }

  getBrand() {
    return this.http.get('http://localhost:11989/api/v1/public/brands/')
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error(error);
    return Promise.reject(error);
  }
}
