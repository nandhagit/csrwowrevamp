import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCartItem } from '../model/shopping-cart-item';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../model/shopping-cart';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'wow-header',
  templateUrl: './wow-navbar.component.html',
  styleUrls: ['./wow-navbar.component.css']
})
export class WowNavbarComponent implements OnInit {

  shoppingCartItemCount: number;


  constructor(private cartService: ShoppingCartService, private http: HttpClient, private router: Router, private authService: AuthService) { 
  }

  async ngOnInit() {
  }

  logout() {
    this.http.post('http://localhost:8080/logout', {}).pipe(
      finalize(() => {
        this.router.navigateByUrl('/home');
      })).subscribe();
  }

  authenticated(){
    return this.authService.loggedIn();
  }

  cartCount(){
    //return this.cartService.getCart()
  }

}
