import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  saveUser(user: any): Observable<any>{
    console.log(user)
    return this.http.post("/wow/saveuser", user);
  }

}
