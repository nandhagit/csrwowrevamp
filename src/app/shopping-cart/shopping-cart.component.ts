import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: any = [];
  totalPrice = 0;
  loading: boolean = true;

  constructor(private cartService: ShoppingCartService) { }

  async ngOnInit() {
    (await this.cartService.getCart()).subscribe(result => {
      let cart: any = result;
      this.cartItems = cart.cartItems.sort(this.productNameCompare);
      for (let c of this.cartItems) {
        this.totalPrice += (c.count * c.product.price);
      }
      this.loading = false;
    });
  }

  getCartCount() {
    return localStorage.getItem('cartCount');
  }

  // async clearCart() {
  //   (await this.cartService.clearCartItems()).subscribe(() => {
  //     localStorage.removeItem('cartId');
  //     localStorage.setItem('cartCount', '0');
  //     this.cartItems = [];
  //     this.totalPrice = 0;
  //   });
  // }

  async onQuantityChange() {
    (await this.cartService.getCart()).subscribe(result => {
      let cart: any = result;
      this.cartItems = cart.cartItems.sort(this.productNameCompare);
      this.totalPrice = 0;
      for (let c of this.cartItems) {
        this.totalPrice += (c.count * c.product.price);
      }
    });
  }

  productNameCompare(a, b) {
    const nameA = a.product.name.toUpperCase();
    const nameB = b.product.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }

}
