export class Brand {
    brandId: number = 0;
    name: string = "";

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}