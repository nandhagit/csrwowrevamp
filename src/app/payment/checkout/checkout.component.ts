import { Component, OnInit } from '@angular/core';
import {PaymentService} from '../payment.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  public payuform: any = {};
  disablePaymentButton: boolean = true;
  constructor(private paymentservice: PaymentService) { }

  ngOnInit() {
  }

  confirmPayment() {
    const paymentPayload = {
      email: this.payuform.email,
      name: this.payuform.firstname,
      phone: this.payuform.phone,
      productInfo: this.payuform.productinfo,
      amount: this.payuform.amount
    };
    return this.paymentservice.dopayment(paymentPayload).subscribe(
      data => {
      console.log(data);
      this.payuform.txnid = data.txnId;
      this.payuform.surl = data.sUrl;
      this.payuform.furl = data.fUrl;
      this.payuform.key = data.key;
      this.payuform.hash = data.hash;
      this.payuform.txnid = data.txnId;
      this.disablePaymentButton = false;
      this.payuform.sp = "payu_paisa";
    }, error1 => {
        console.log(error1);
      });
  }

  placeOrder(value){
    console.log(value)
  }

}
