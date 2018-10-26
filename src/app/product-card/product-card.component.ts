import { Component, OnInit, Input } from "@angular/core";
import { ShoppingCartService } from "../services/shopping-cart.service";

@Component({
  selector: "product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"]
})
export class ProductCardComponent {

  @Input("product") product;
  @Input("show-actions") showActions = true;
  @Input("shopping-cart") cart;

  favoriteIcon = 'favorite_border';

  constructor() {
    //console.log(this.cart)
  }

  changeFav(icon: string) {
    if (icon === 'favorite') {
      this.favoriteIcon = 'favorite_border';
      return;
    }
    this.favoriteIcon = 'favorite';
  }

}
