import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCartItem } from '../model/shopping-cart-item';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../model/shopping-cart';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { CategoryService } from '../services/category.service';
import { CartItem } from '../shopping-cart/shopping-cart-item';

@Component({
  selector: 'wow-header',
  templateUrl: './wow-navbar.component.html',
  styleUrls: ['./wow-navbar.component.css']
})
export class WowNavbarComponent {

  shoppingCartItemCount: number;

  categories;

  constructor(private categoryService: CategoryService, 
    private cartService: ShoppingCartService, private authService: AuthService) { 
     this.categoryService.getCategories().subscribe(result=>{
      this.categories = result
    });
  }

  async ngOnInit() {
    
    (await this.cartService.getCart()).subscribe(result => {
      let cart = result;
      let cartItems = cart.cartItems;
      let totalCount=0;
      for (let c of cartItems) {
        totalCount += c.count;
      }
      localStorage.setItem('cartCount', totalCount.toString())
    })
  }

  getCartCount(){
    return localStorage.getItem('cartCount')
  }

}
