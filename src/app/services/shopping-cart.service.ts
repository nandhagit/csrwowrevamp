import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }

  private create() {
    return this.http.post('/wow/api/cart', {}).toPromise();
  }

  private async getOrCreateCartId(): Promise<string> {
    const cartId = localStorage.getItem('cartId');
    if (cartId) { return cartId; }

    const result = await this.create();
    const cart: any = result;
    localStorage.setItem('cartId', cart.id);
    return cart.id;
  }

  async getCart() {
    const cartId = await this.getOrCreateCartId();
    return this.http.get('/wow/api/cart', { params: { cart: cartId } });
  }

  async addToCart(product: Product): Promise<Observable<any>> {
    const cartId = await this.getOrCreateCartId();
    const item$ = this.getItem(product.id, cartId);
    return item$;
  }

  async removeFromCart(product: Product): Promise<Observable<any>> {
    const cartId = await this.getOrCreateCartId();
    const item$ = this.removeItem(product.id, cartId);
    return item$;
  }

  private getItem(productId: number, cartId: string) {
    return this.http.post('/wow/api/cart-item', { cart: cartId, product: productId });
  }

  private removeItem(productId: number, cartId: string) {
    return this.http.post('/wow/api/remove/cart-item', { cart: cartId, product: productId });
  }

  async clearCartItems() {
    const cartId = await this.getOrCreateCartId();
    return this.http.get('/wow/api/clear-cart', { params: { cart: cartId } });
  }

}
