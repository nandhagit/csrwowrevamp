import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(userid: string) {
    return this.http.get('/wow/getuser', {params: {userid: userid}});
  }

  getCurrentUser() {
    return this.http.get('/wow/getcurrentuser');
  }
}
