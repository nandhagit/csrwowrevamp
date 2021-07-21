import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<any> {
    return this.http.get("/wow/api/admin/orders");
  }

  getMyOrders(): Observable<any> {
    return this.http.get("/wow/api/orders");
  }

  getOrderDetail(orderid: string): any {
    return this.http.get("/wow/api/orderdetail", {params:{orderId: orderid}});
  }
}
