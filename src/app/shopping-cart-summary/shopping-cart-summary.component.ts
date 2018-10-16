import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent implements OnInit {

  cartItems;
  totalPrice = 0;
  totalCount = 0;

  constructor(private cartService: ShoppingCartService) { }

  async ngOnInit() {
    (await this.cartService.getCart()).subscribe(cart => {
      this.cartItems = cart;
      for (let c of this.cartItems) {
        this.totalPrice += (c.count * c.product.price);
        this.totalCount += c.count;
      }
    })
  }

}
