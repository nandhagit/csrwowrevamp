import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  authenticated = false;
  user: any;
  constructor(private http: HttpClient) { }

  loggedIn() {
    return this.authenticated;
  }

  authenticate(credentials) {
    const headers = new HttpHeaders(
      credentials
        ? {
          authorization:
            "Basic " + btoa(credentials.email + ":" + credentials.password)
        }
        : {}
    );

    this.http
      .get("http://localhost:8080/wow/user", { headers: headers })
      .subscribe(response => {
        if (!response) {
          this.authenticated = false;
        }
        else if (response["name"]) {
          this.authenticated = true;
        }
      });
  }
}
