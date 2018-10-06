import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  dopayment(paymentPayload: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/payment/payment-details', paymentPayload);
  }
}
