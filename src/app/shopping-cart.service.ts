import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ShoppingCartItem } from './model/shopping-cart-item';
import { Product } from './model/product';
import { CartItem } from './shopping-cart/shopping-cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }

  private create() {
    return this.http.get("http://localhost:8080/wow/createCart").toPromise()
  }

  private async getOrCreateCartId(): Promise<string>{
    let cartId = localStorage.getItem("cartId");
    if (cartId) return cartId;

    let result = await this.create();
    let cart: any = result;
    localStorage.setItem("cartId", cart.id)
    return cart.id
  }

  async getCart(): Promise<Observable<any>> {
    let cartId = await this.getOrCreateCartId();
    return this.http.get("http://localhost:8080/wow/getcartitems", {params:{cart: cartId}});
  }

  async addToCart(product: Product):Promise<Observable<any>> {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(product.id, cartId);
      return item$;
  }

  async removeFromCart(product: Product):Promise<Observable<any>> {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.removeItem(product.id, cartId);
      return item$;
  }

  private getItem(productId: number, cartId: string) {
    return this.http.post("http://localhost:8080/wow/addtocart", { cart: cartId, product: productId });
  }

  private removeItem(productId: number, cartId: string) {
    return this.http.post("http://localhost:8080/wow/removefromcart", { cart: cartId, product: productId });
  }

  async clearCartItems(){
    let cartId= await this.getOrCreateCartId()
    return this.http.get("http://localhost:8080/wow/clearCart", { params:{cart: cartId }});
  }

}
