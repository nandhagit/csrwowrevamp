import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCartItem } from '../model/shopping-cart-item';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../model/shopping-cart';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'wow-header',
  templateUrl: './wow-navbar.component.html',
  styleUrls: ['./wow-navbar.component.css']
})
export class WowNavbarComponent {

  shoppingCartItemCount: number;

  categories$;

  constructor(private categoryService: CategoryService, 
    private cartService: ShoppingCartService, private authService: AuthService) { 
    this.categories$ = this.categoryService.getCategories();
    console.log("in cons")
    let cart$ = this.cartService.getCart()
  }

   getCartCount(){
    console.log("here");
  }

}
