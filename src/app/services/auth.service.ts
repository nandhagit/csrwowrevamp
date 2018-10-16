import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authenticated = false;
  user: any;
  constructor(private http: HttpClient) { }

  loggedIn() {
    return this.authenticated;
  }

  authenticate(credentials): Observable<any> {
    console.log(credentials);
    return this.http.post(
      "http://localhost:8080/auth",
      credentials
    ).pipe(map(response => {
      let result: any = response
      if (result && result.token) {
        localStorage.setItem("token", result.token)
        return true;
      }
      return false;
    }))
  }

  logout() {
    localStorage.removeItem("token");
  }

  isLoggedIn() {
    let token = localStorage.getItem("token")
    if(!token) {
      return false;
    }
    let jwtHelper = new JwtHelperService();
    return !jwtHelper.isTokenExpired(token);
  }

  get currentUser(){
    let token = localStorage.getItem("token")
    if(!token) {
      return false;
    }
    let jwtHelper = new JwtHelperService();
    return jwtHelper.decodeToken(token);
  }
  
}
