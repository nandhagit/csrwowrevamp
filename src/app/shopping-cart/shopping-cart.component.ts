import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Observable } from 'rxjs';
import { CartItem } from './shopping-cart-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: CartItem[];
  totalPrice = 0;
  loading: boolean = true;

  constructor(private cartService: ShoppingCartService) { }

  async ngOnInit() {
    let cart$ = await this.cartService.getCart();
    cart$.subscribe(cartItems => {
      this.cartItems = cartItems;
      for (let c of this.cartItems) {
        this.totalPrice += (c.count * c.product.price);
      }
      this.loading = false;
    });
  }

  getCartCount() {
    return localStorage.getItem('cartCount');
  }

  async clearCart() {
    (await this.cartService.clearCartItems()).subscribe(() => {
      localStorage.removeItem("cartId");
     // this.ngOnInit()
    })
  }

}
