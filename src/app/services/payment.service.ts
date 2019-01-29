import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  // dopayment(paymentPayload: any): Observable<any> {
  //   return this.http.post<any>('/payment/payment-details', paymentPayload);
  // }

  capturePayment(id: any): Observable<any> {
    return this.http.get('/wow/api/capture-payment', {params: {payid: id}})
  }
}
