import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { OrderService } from '../services/order.service';
import { SignupService } from '../signup/signup.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  user: any = [];
  orders: any = [];
  editable = false;
  email: string;
  phone: string;
  noChange = false;

  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private orderService: OrderService,
    private signupservice: SignupService) {
    let userId = route.snapshot.paramMap.get('id');
    userService.getUser(userId).subscribe(data => {
      this.user = data;
      this.email = this.user.email;
      this.phone = this.user.phone;
    });
    this.orderService.getMyOrders().subscribe(result => {
      this.orders = result;
      console.log(this.orders);
    });
  }

  saveUserChanges() {
    if (this.email === this.user.email && this.phone === this.user.phone) {
      this.noChange = true;
      console.log("no changed");
    } else {
      this.user.email = this.email;
      this.user.phone = this.phone;
      this.signupservice.updateUser(this.user).subscribe(
        response => {
            this.user = response;
        },
        error => {
        }
      );
      this.noChange = false;
    }
  }

}
