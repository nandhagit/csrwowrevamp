import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent {

  @Input('cartitems') cartItems;

  constructor(private cartService: ShoppingCartService) { }

  get count(){
    let totalCount = 0;
    for (let c of this.cartItems) {
      totalCount += c.count;
    }
    return totalCount;
  }

  get total(){
    let totalPrice = 0;
    for (let c of this.cartItems) {
      totalPrice += (c.count * c.product.price);
    }
    return totalPrice;
  }

}
