import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders: any;
  loading: boolean = true;
  constructor(private orderService: OrderService) {
    this.orderService.getAllOrders().subscribe(result => {
      this.orders = result;
      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
