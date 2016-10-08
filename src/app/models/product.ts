import { Brand } from '../models/brand';

export class Product {
    productId: number = 0;
    name: string = "";
    brandId: number = 0;
    brand: Brand;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}