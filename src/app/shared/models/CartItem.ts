import { Product } from "./Product";

export default class CartItem {
    id!: number;
    product!: Product;
    quatity: number = 1;

    constructor(product: Product){
        this.product = product;
        this.price;
    }

    get price(): number {
        return this.product.price * this.quatity;
    }
}