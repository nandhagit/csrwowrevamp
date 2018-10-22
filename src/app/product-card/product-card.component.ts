import { Component, OnInit, Input } from "@angular/core";
import { ShoppingCartService } from "../services/shopping-cart.service";

@Component({
  selector: "product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"]
})
export class ProductCardComponent implements OnInit{

  @Input("product") product;
  @Input("show-actions") showActions = true;
  @Input("shopping-cart") cart;
  
  constructor() {
    //console.log(this.cart)
  }

  ngOnInit(){
    
  }

}
