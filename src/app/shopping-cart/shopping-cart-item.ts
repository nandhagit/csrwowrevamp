import { Product } from "../model/product";

export class CartItem{

    product: Product;
    count: number;

    get totalPrice(){
        return this.product.price * this.count;
    }
}