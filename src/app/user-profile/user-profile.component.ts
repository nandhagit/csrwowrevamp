import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any = [];
  orders: any = [];

  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private orderService: OrderService) {
    let userId = route.snapshot.paramMap.get('id');
    userService.getUser(userId).subscribe(data => {
      this.user = data;
    });
    this.orderService.getMyOrders().subscribe(result => {
      this.orders = result;
      console.log(this.orders);
    });
  }

  ngOnInit() {
  }

}
