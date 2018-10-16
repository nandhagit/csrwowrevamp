import { Component, OnInit, Input } from "@angular/core";
import { ShoppingCartService } from "../services/shopping-cart.service";

@Component({
  selector: "product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"]
})
export class ProductCardComponent implements OnInit {

  @Input("product") product;
  @Input("show-actions") showActions = true;
  shoppingCart;
  count;
  constructor(private cartService: ShoppingCartService) {
  }

  async addToCart() {
    (await this.cartService.addToCart(this.product)).subscribe(async result => {
      (await this.getCartItems()).subscribe(result => {
        this.shoppingCart = result;
        this.getQuantity()
        this.setCount()
      })
    });
  }

  async removeFromCart() {
    (await this.cartService.removeFromCart(this.product)).subscribe(async result => {
      (await this.getCartItems()).subscribe(result => {
        this.shoppingCart = result;
        this.getQuantity()
        this.setCount()
      })
    });
  }

  getQuantity() {
    if (!this.shoppingCart) this.count = 0;
    let item = this.shoppingCart.find(item => item.product.id === this.product.id)
    this.count = item ? item.count : 0;
  }

  async getCartItems() {
    let cart$ = await this.cartService.getCart()
    return cart$
  }

  async ngOnInit() {
    (await this.getCartItems()).subscribe(result => {
      this.shoppingCart = result;
      this.getQuantity()
    })
  }

  setCount() {
    let totalCount = 0;
    for (let c of this.shoppingCart) {
      totalCount += c.count;
    }
    localStorage.setItem('cartCount', totalCount.toString())
  }

}
