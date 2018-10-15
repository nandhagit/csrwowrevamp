import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
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
  totalCount = 0;

  constructor(private cartService: ShoppingCartService) { }

  async ngOnInit() {
    let cart$ = await this.cartService.getCart();
    cart$.subscribe(cartItems => {
      this.cartItems = cartItems;
      for (let c of this.cartItems) {
        this.totalPrice += (c.count * c.product.price);
        this.totalCount += c.count;
      }
    })
  }

  async clearCart() {
    (await this.cartService.clearCartItems()).subscribe(() => {
      localStorage.removeItem("cartId")
      this.ngOnInit()
    })
  }

}