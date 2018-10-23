import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authenticated = false;
  user: any;
  cart: any;
  constructor(private http: HttpClient) { }

  loggedIn() {
    return this.authenticated;
  }

  authenticate(credentials): Observable<any> {
    let cartId = localStorage.getItem('cartId');
    return this.http.post('/auth', credentials).pipe(map(response => {
      let result: any = response;
      if (result && result.token) {
        localStorage.setItem('token', result.token);
        this.http.get('/wow/mergecart', { params: { cart: cartId } }).subscribe(data => {
          this.cart = data;
          localStorage.setItem('cartId', this.cart.id);
          this.setCount();
        });
        return true;
      }
      return false;
    }), catchError(error => {
      return of(false);
    }));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('cartId');
    localStorage.removeItem('cartCount');
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    let jwtHelper = new JwtHelperService();
    return !jwtHelper.isTokenExpired(token);
  }

  get currentUser() {
    let token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    let jwtHelper = new JwtHelperService();
    return jwtHelper.decodeToken(token);
  }

  setCount() {
    let totalCount = 0;
    for (let c of this.cart.cartItems) {
      totalCount += c.count;
    }
    localStorage.setItem('cartCount', totalCount.toString());
  }

}
