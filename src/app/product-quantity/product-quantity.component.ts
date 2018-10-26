import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private cartService: ShoppingCartService, private snackBar: MatSnackBar) {
  }

  async addToCart() {
    (await this.cartService.addToCart(this.product)).subscribe(result => {
      const cart = result;
      this.cartItems = cart.cartItems;
      this.setCount();
      this.snackBar.open('Added to your cart', '', {
        duration: 1000,
      });
    });
  }

  async removeFromCart() {
    (await this.cartService.removeFromCart(this.product)).subscribe(result => {
      const cart = result;
      this.cartItems = cart.cartItems;
      this.setCount();
      this.snackBar.open('Removed from your cart', '', {
        duration: 1000,
      });
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