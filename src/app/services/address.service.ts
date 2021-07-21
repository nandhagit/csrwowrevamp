import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  saveAddress(address: any) {
    return this.http.post('/wow/api/address', address);
  }

  getAddress() {
     return this.http.get('/wow/api/address');
  }
}
