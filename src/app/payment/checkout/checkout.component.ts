import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  user: any = [];
  cartItems: any = [];
  public payuform: any = {};
  disablePaymentButton: boolean = true;
  address: number;

  constructor(private paymentservice: PaymentService,
    private userService: UserService,
    private authService: AuthService,
    private cartService: ShoppingCartService) {

  }

  async ngOnInit() {
    this.userService.getCurrentUser().subscribe(data => {
      this.user = data;
      this.payuform.firstname = this.user.firstname;
      this.payuform.email = this.user.email;
      this.payuform.phone = this.user.phone;
    });
    (await this.cartService.getCart()).subscribe(result => {
      let cart: any = result;
      this.cartItems = cart.cartItems;
    });
  }

  confirmPayment() {

    const paymentPayload = {
      email: this.user.email,
      name: this.user.firstname,
      phone: this.user.phone,
      productInfo: 'Info',
      amount: this.total,
      address: this.address,
      cart: localStorage.getItem('cartId')
    };
    return this.paymentservice.dopayment(paymentPayload).subscribe(
      data => {
        this.payuform.txnid = data.txnId;
        this.payuform.surl = data.sUrl;
        this.payuform.furl = data.fUrl;
        this.payuform.key = data.key;
        this.payuform.hash = data.hash;
        this.payuform.txnid = data.txnId;
        this.payuform.amount = this.total;
        this.payuform.productinfo = 'Info';
        this.disablePaymentButton = false;
        this.payuform.sp = "payu_paisa";
      }, error => {
        console.log(error);
      });
  }

  get total() {
    let totalPrice = 0;
    for (let c of this.cartItems) {
      totalPrice += (c.count * c.product.price);
    }
    return totalPrice;
  }

  onSelectAddress(event: any) {
    this.address = event;
  }

}
