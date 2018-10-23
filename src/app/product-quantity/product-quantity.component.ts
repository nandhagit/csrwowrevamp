import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {

  @Input('product') product;
  @Input('showAdd') showAdd;
  @Input('shopping-cart') cartItems;
  count;

  constructor(private cartService: ShoppingCartService) {
  }

  async addToCart() {
    (await this.cartService.addToCart(this.product)).subscribe( result => {
        const cart = result;
        this.cartItems = cart.cartItems;
        this.setCount();
    });
  }

  async removeFromCart() {
    (await this.cartService.removeFromCart(this.product)).subscribe( result => {
        const cart = result;
        this.cartItems = cart.cartItems;
        this.setCount();
    });
  }

  getQuantity() {
    if (!this.cartItems) {
      return this.count = 0;
    }
    const item = this.cartItems.find(i => i.product.id === this.product.id);
    return item ? item.count : 0;
  }

  setCount() {
    let totalCount = 0;
    for (let c of this.cartItems) {
      totalCount += c.count;
    }
    localStorage.setItem('cartCount', totalCount.toString());
  }

}
