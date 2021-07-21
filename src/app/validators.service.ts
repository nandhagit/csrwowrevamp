import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor(private http: HttpClient) { }

  checkPhoneNumber(phoneNumber) {
    return this.http.get('/wow/api/validate-ph', {params: {phonenumber: phoneNumber}});
  }

  checkEmail(email) {
    return this.http.get('/wow/api/validate-email', {params: {email: email}});
  }

}
