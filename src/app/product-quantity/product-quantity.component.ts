import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {

  @Input("product") product;
  @Input("showAdd") showAdd;
  @Input("cart") shoppingCart;
  count;

  constructor(private cartService: ShoppingCartService) {
  }

  async addToCart() {
    (await this.cartService.addToCart(this.product)).subscribe( result => {
      //(await this.getCartItems()).subscribe(result => {
        let cart = result;
        this.shoppingCart = cart.cartItems;
        this.getQuantity();
        this.setCount();
      //});
    });
  }

  async removeFromCart() {
    (await this.cartService.removeFromCart(this.product)).subscribe( result => {
      //(await this.getCartItems()).subscribe(result => {
        let cart = result;
        this.shoppingCart = cart.cartItems;
        this.getQuantity();
        this.setCount();
      //});
    });
  }

  getQuantity() {
    if (!this.shoppingCart) { 
      this.count = 0; 
      return;
    };
    let item = this.shoppingCart.find(item => item.product.id === this.product.id)
    this.count = item ? item.count : 0;
  }

  //async getCartItems() {
    //let cart$ = await this.cartService.getCart();
    //return cart$;
  //}

  setCount() {
    let totalCount = 0;
    for (let c of this.shoppingCart) {
      totalCount += c.count;
    }
    localStorage.setItem('cartCount', totalCount.toString())
  }

   ngOnInit() {
    this.getQuantity();
      console.log(this.shoppingCart)
  }

  

}
