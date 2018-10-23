import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { AuthService } from '../services/auth.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'wow-header',
  templateUrl: './wow-navbar.component.html',
  styleUrls: ['./wow-navbar.component.css']
})
export class WowNavbarComponent implements OnInit {

  shoppingCartItemCount: number;

  categories;

  constructor(private categoryService: CategoryService,
    private cartService: ShoppingCartService, private authService: AuthService) {
    this.categoryService.getCategories().subscribe(result => {
      this.categories = result;
    });
  }

  async ngOnInit() {
    (await this.cartService.getCart()).subscribe(result => {
      let cart: any = result;
      let cartItems = cart.cartItems;
      let totalCount = 0;
      for (let c of cartItems) {
        totalCount += c.count;
      }
      localStorage.setItem('cartCount', totalCount.toString());
    });
  }

  getCartCount() {
    return localStorage.getItem('cartCount');
  }

}
