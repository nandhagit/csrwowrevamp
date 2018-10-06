import { Component, OnInit, Input } from "@angular/core";
import { ShoppingCartService } from "../shopping-cart.service";

@Component({
  selector: "product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"]
})
export class ProductCardComponent {

  @Input("product") product;
  @Input("show-actions") showActions = true;
  shoppingCart;

  constructor(private cartService: ShoppingCartService) { 
    //this.getCartItems();
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.getCartItems();
  }

  getQuantity() {
    if (!this.shoppingCart) return 0;
    let item = this.shoppingCart.find(item => item.product.id === this.product.id)
    return item ? item.count : 0;
  }

  async getCartItems() {
    (await this.cartService.getCart()).subscribe(cart=>{
      this.shoppingCart = cart;
    })
  }


}
